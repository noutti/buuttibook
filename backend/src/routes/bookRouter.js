import express from "express";
import {
    getBooks, addBook, deleteBook, editBook,
} from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.post("/", addBook);
bookRouter.delete("/", deleteBook);
bookRouter.put("/", editBook);

export default bookRouter;
