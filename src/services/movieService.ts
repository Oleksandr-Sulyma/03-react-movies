import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const fetchMovies = async (query: string): Promise<Movie[]> => {
  if (!query.trim()) return [];
  
  try {
    const response = await axios.get<MovieResponse>(
      `${BASE_URL}/search/movie`, {
        params: {
          query,
          include_adult: false,
          language: "en-US",
          page: 1,
        },
        headers: {
          Authorization: `Bearer ${TMDB_TOKEN}`,
        },
      }
    );
    return response.data.results || [];
  } catch (error) {
    throw error;
  }
};

export default fetchMovies;
