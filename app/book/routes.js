// Allows us to modularize our routes
import { Router } from "express";
import bookController from "./controller.js";

const router = new Router();

router.post("/create", async (req, res) => {
  // await is nice when you want to wait for a promise to resolve before continuing. It's not necessary here, but it's a good habit to get into.
  const createdBook = await bookController.create(req.body);
  res.json(createdBook);
});

router.post("/createMany", async (req, res) => {
  const createdBooks = await bookController.createMany(req.body.books);
  res.json(createdBooks);
});

router.get("/readAll", async (req, res) => {
  const books = await bookController.readAll();
  res.json(books);
});

// :id is a dynamic route parameter. It's a placeholder for a value that will be passed in the URL.
router.delete("/destroyOne/:id", async (req, res) => {
  const deletedBook = await bookController.destroyOne(req.params.id);
  res.json(deletedBook);
});

export default router;
