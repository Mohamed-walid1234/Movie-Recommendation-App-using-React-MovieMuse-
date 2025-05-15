import express from "express";
import { getMovie, getMovies } from "../controllers/movies.controller.js";

const router = express.Router();

// movies routes
// get one movie
router.get("/:id", getMovie);
// get all moivies
router.get("/", getMovies);

export default router;