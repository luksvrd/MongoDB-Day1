// client is how the controller accesses the database. It is passed in from the route.
import { MongoClient, ObjectId } from "mongodb";
import data from "./data.js";
const URI = "mongodb://localhost:27017";

const client = new MongoClient(URI, {
  // These options are required to avoid deprecation warnings. useUnifiedTopology is required to use the new connection pool. And useNewUrlParser is required to use the new URL parser.
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("GroceryListDB");
const groceryListCollection = db.collection("groceryList");

// /await the results of the deltetion (asynchronous)
await groceryListCollection.deleteMany({});
await groceryListCollection.insertMany(data);

export default controller;
