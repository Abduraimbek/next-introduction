import MeetupDetails from '../../components/meetups/MeetUpDetails';

export default function MeetupDetailsPage(props) {
  return <MeetupDetails meetupData={props.meetupData} />;
}

async function getMeetups() {
  const response = await fetch(
    'https://react-http-6fe49-default-rtdb.firebaseio.com/nextjs-meetups.json'
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

  return meetups;
}

export async function getStaticPaths() {
  const meetups = await getMeetups();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup.id,
      },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const meetups = await getMeetups();

  const meetup = meetups.find((x) => x.id === meetupId);

  return {
    props: {
      meetupData: meetup,
    },
  };
}
