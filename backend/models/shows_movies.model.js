import mongoose from "mongoose";

// Define what a "Show" or "Movie" document looks like
const showMovieSchema = new mongoose.Schema({
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

const ShowMovie = mongoose.model('ShowMovie', showMovieSchema, 'Shows_Movies');
export default ShowMovie;