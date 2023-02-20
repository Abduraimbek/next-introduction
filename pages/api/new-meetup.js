export default async function handler(req, res) {
  const url =
    'https://react-http-6fe49-default-rtdb.firebaseio.com/nextjs-meetups.json';

  if (req.method === 'POST') {
    const data = req.body;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    res.status(201).json({ message: 'Meetup created!' });
  }
}
