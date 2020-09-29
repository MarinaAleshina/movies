import { getMovie } from "../servises/api";
import topMovies from "../../assets/imdb_top250.json";

export const createObjOfMovie = async () => {
  const objOfMovies = {};

  for (let id of topMovies) {
    const movie = await getMovie(id);
    objOfMovies[movie.imdbID] = movie;
  }

  return objOfMovies;
};
