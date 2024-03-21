import { MongoClient } from 'mongodb';

// Replace the uri with your actual MongoDB URI from the environment variables
const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

// Initialize the connection once for your application
if (!clientPromise) {
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  clientPromise = client.connect();
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to the MongoDB client
      const client = await clientPromise;
      const database = client.db('nivBarsh');
      const contacts = database.collection('users');
      
      // Parse the request body to get the contact data
      const contactData = req.body;

      // Insert the contact data into the database
      const result = await contacts.insertOne(contactData);

      // Send a response to the client
      res.status(200).json({ message: 'Contact saved', result });
    } catch (error) {
      // If there's an error, log it and send an error response
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  } 

  else {
    // If the method is not POST, send a method not allowed response
    res.status(405).json({ message: 'Method not allowed' });
  }
}
