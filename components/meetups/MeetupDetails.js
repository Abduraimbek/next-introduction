import classes from './MeetupDetails.module.css';

export default function MeetupDetails(props) {
  const meetupData = props.meetupData;

  return (
    <section className={classes.detail}>
      <img alt={meetupData.title} src={meetupData.image} />
      <h1>{meetupData.title}</h1>
      <address>{meetupData.address}</address>
      <p>{meetupData.description}</p>
    </section>
  );
}
