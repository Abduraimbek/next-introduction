export async function getMeetups() {
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
