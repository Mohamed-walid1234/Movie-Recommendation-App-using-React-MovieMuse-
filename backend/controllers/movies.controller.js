import ShowMovie from "../models/shows_movies.model.js";

// get one movie
export const getMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await movies.findById(id);
        res.status(200).json(movie);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error getting movie" });
    }
}
// get all movies   
export const getMovies = async (req, res) => {
    try {
        const Details = await ShowMovie.find().sort({ startYear: -1}).limit(30);
        res.status(200).json(Details);
        console.log(Details);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: `${error.message} Error getting movies` });
    }
}
