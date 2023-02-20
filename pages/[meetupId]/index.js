import MeetupDetails from '../../components/meetups/MeetUpDetails';
import { getMeetups } from '../../utils/meetups';

export default function MeetupDetailsPage(props) {
  return <MeetupDetails meetupData={props.meetupData} />;
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
