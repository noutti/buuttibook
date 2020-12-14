import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import BookRouter from "./routes/bookRouter.js";

console.log("Starting backend...");

const app = express();

app.use(express.json());
app.use(cors());

const mongoUrl = "mongodb://localhost:27017/bookdb";

const connectMongoose = async () => {
    await mongoose.connect(
        mongoUrl,
        { useNewUrlParser: true, useUnifiedTopology: true },
    );
};

connectMongoose();
mongoose.set("useFindAndModify", false); // Doesn't use the deprecated findAndModify function

app.use("/", BookRouter);

app.listen(5000, () => {
    console.log("Listening to port 5000...");
});
