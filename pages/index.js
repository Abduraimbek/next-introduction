import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { getMeetups } from '../utils/meetups';

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
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const meetups = await getMeetups();

  return {
    props: {
      meetups: meetups,
    },
    revalidate: 10,
  };
}
