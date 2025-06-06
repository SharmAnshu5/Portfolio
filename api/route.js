import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let clientPromise = client.connect();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('anshusharma5as');
      const collection = db.collection('users');

      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const result = await collection.insertOne({ name, email, message });

      return res.status(200).json({ message: 'Form submitted', id: result.insertedId });
    } catch (err) {
      console.error('Error saving to MongoDB:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}