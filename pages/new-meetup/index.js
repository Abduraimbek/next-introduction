import { useRouter } from 'next/router';

import NewMeetUpForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    router.push('/');
  }

  return <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
}
