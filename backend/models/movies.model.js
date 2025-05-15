import mongoose from "mongoose";

// Define the schema for the movies model
const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
});
const movies = mongoose.model("Movies", moviesSchema);
export default movies;

