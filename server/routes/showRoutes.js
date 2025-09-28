import express from "express";
import {
  addShow,
  getNowPlayingMovies,
  getShow,
  getShows,
  getTMDBMovies,
} from "../controllers/showController.js";
import { protectAdmin } from "../middleware/auth.js";
import Movie from "../models/Movie.js";

const showRouter = express.Router();

showRouter.get("/now-playing", getNowPlayingMovies);
showRouter.get("/test-movies", async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json({ success: true, movies: movies, count: movies.length });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});
showRouter.get("/now-playing-tmdb", getTMDBMovies)
showRouter.post("/add", protectAdmin, addShow);
showRouter.get("/all", getShows);
showRouter.get("/:movieId", getShow);

export default showRouter;