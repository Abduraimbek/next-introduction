import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          description='description'
          content='Browse a huge list of highly active React Meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const meetups = await getMeetups();

//   return {
//     props: {
//       meetups: meetups,
//     },
//   };
// }

export async function getStaticProps() {
  const response = await fetch(
    'https://react-http-6fe49-default-rtdb.firebaseio.com/nextjs-meetups.json',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();

  const meetups = [];

  for (const key in data) {
    meetups.push({
      id: key,
      title: data[key].title,
      image: data[key].image,
      description: data[key].description,
      address: data[key].address,
    });
  }

  return {
    props: {
      meetups: meetups,
    },
    revalidate: 10,
  };
}
