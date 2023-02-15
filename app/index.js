// Create the shelter DB & then a couple routes
import express from "express";
import controller from "./pet/controller.js";

const PORT = 3000;

const app = express();

// Middleware - Allows us to parse JSON
app.use(express.json());

app.post("/pet/create", (req, res) => {
  controller.create(req.body).then((result) => {
    res.json(result);
  });
});

app.get("/pet/readAll", (req, res) => {
  controller.readAll().then((result) => {
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}/`);
});
