import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

try {
  dotenv.config();
} catch (error) {
  console.error("Error loading environment variables:", error);
  process.exit(1);
}


const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  tls: true
});

// Connect to MongoDB Atlas
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if unable to connect
  }
}

// Connect to MongoDB Atlas when the application starts
connectToDatabase();

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my website');
});

app.get('/books', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("BooksDB");
    const collection = database.collection("books");
    
    const books = await collection.find({}).toArray();
    
    res.json(books);
    
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
  finally {
    await client.close();
  }

});

app.get('/recipes', async (req, res) => {
  try {
    const database = client.db("recipiesDB");
    const collection = database.collection("recipes");
    const recipes = await collection.find({}).toArray();
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/countries', async (req, res) => {
  try {
    const database = client.db("countryDB");
    const collection = database.collection("countries");
    const countries = await collection.find({}).toArray();
    res.json(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Close the MongoDB client connection when the application shuts down
process.on('SIGINT', async () => {
  try {
    await client.close();
    console.log("MongoDB client connection closed");
    process.exit(0);
  } catch (error) {
    console.error("Error closing MongoDB client connection:", error);
    process.exit(1);
  }
});