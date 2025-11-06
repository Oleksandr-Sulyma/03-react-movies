import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

const fetchMovies = async (query: string) => {
  try {
    const myKey = import.meta.env.VITE_API_KEY;

    const response = await axios.get<MovieResponse>(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          query,
        },
        headers: {
          Authorization: `Bearer ${myKey}`,
        },
      }
    );
    return response.data.results as Movie[];
  } catch (error) {
    throw error;
  }
};

export default fetchMovies;
