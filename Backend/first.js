import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
app.get('/', async(req,res) => {
  res.send('welcome to my website ');
})
app.get('/books', async (req, res) => {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const database = client.db("BooksDB");
    const collection = database.collection("books");

    const books = await collection.find({}).toArray();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});
app.get('/recipes', async (req,res) => {
  try{
    await client.connect();
    console.log('Connected successfully');
    const database = client.db("recipiesDB");
    const collection = database.collection("Recipies");
    const recipes = await collection.find({}).toArray();
    res.json(recipes);
  }catch (err){
    console.error(err);
    res.status(500).json({error: "Internal server error"});
  }finally{
    await client.close();
  }
});
app.get('/countries', async (req,res) => {
  try{
    await client.connect();
    console.log('Connected successfully');
    const database = client.db("countryDB");
    const collection = database.collection("countries");
    const recipes = await collection.find({}).toArray();
    res.json(recipes);
  }catch (err){
    console.error(err);
    res.status(500).json({error: "Internal server error"});
  }finally{
    await client.close();
  }
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
