import BookModel from "../models/bookModel.js";

export const addBook = (request, response) => {
    const {
        title,
        author,
        description,
    } = request.body;

    const bookData = new BookModel(
        {
            title,
            author,
            description,
        },
    );
    bookData.save().then(() => {
        response.status(200).end();
    }).catch((error) => {
        response.status(500).json({ error: error.message });
    });
};

export const getBooks = async (request, response) => {
    const books = await BookModel.find();
    if (books) {
        response.status(200).json(books);
    } else {
        response.status(404).json({ error: "No books found" });
    }
};

export const editBook = async (request, response) => {
    const {
        id,
        title,
        author,
        description,
    } = request.body;

    const book = BookModel.findByIdAndUpdate(id,
        {
            title,
            author,
            description,
        },
        { new: true }).then(() => {
        response.status(200).json(book);
    }).catch((error) => {
        response.status(500).json({ error: error.message });
    });
};

export const deleteBook = async (request, response) => {
    const { id } = request.body;
    BookModel.findByIdAndDelete(id).then(() => {
        response.status(200).end();
    }).catch((error) => {
        response.status(500).json({ error: error.message });
    });
};
