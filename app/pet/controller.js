// client is how the controller accesses the database. It is passed in from the route.
import { MongoClient } from "mongodb";

const URI = "mongodb://localhost:27017";

const client = new MongoClient(URI, {
  // These options are required to avoid deprecation warnings. useUnifiedTopology is required to use the new connection pool. And useNewUrlParser is required to use the new URL parser.
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = client.db("ShelterDB");
const petCollection = db.collection("pets");

petCollection.insertOne({
  name: "Fido",
  type: "Pug",
});

// Controller methods are defined here. They are passed to the route.
const controller = {
  create(newPet) {
    return petCollection.insertOne(newPet);
  },
  readAll() {
    // gotta say toArray() to get the data out of the cursor. Otherwise, it's just a cursor.
    return petCollection.find({}).toArray();
  },
};

export default controller;
