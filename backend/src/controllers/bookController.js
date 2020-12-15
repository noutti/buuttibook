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

export const getBooks = (request, response) => {
    BookModel.find().then((res) => {
        response.status(200).json(res);
    }).catch((error) => {
        response.status(500).json({ error: error.message });
    });
};

export const editBook = (request, response) => {
    const {
        id,
        title,
        author,
        description,
    } = request.body;

    // Don't let user set fields to empty
    if (!title || !author || !description) {
        response.status(400).json({ error: "Fill all required fields." });
    } else {
        BookModel.findByIdAndUpdate(id,
            {
                title,
                author,
                description,
            },
            { new: true }).then((res) => {
            response.status(200).json(res);
        }).catch((error) => {
            response.status(500).json({ error: error.message });
        });
    }
};

export const deleteBook = (request, response) => {
    const { id } = request.body;
    BookModel.findByIdAndDelete(id).then(() => {
        response.status(200).end();
    }).catch((error) => {
        response.status(500).json({ error: error.message });
    });
};
