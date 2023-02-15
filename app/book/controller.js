// client is how the controller accesses the database. It is passed in from the route.
import { MongoClient } from "mongodb";

const URI = "mongodb://localhost:27017";

const client = new MongoClient(URI, {
  // These options are required to avoid deprecation warnings. useUnifiedTopology is required to use the new connection pool. And useNewUrlParser is required to use the new URL parser.
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("bookDB");
const bookCollection = db.collection("books");

const controller = {
  create(newBook) {
    return bookCollection.insertOne(newBook);
  },
  createMany(newBooks) {
    return bookCollection.insertMany(newBooks);
  },
  readAll() {
    return bookCollection.find({}).toArray();
  },
};

export default controller;
