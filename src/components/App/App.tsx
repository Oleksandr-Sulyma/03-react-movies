import css from "./App.module.css";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import fetchMovies from "../../services/movieService";
import type { Movie } from "../../types/movie";
import { useState } from "react";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;

    try {
      setMovies([]);
      setIsError(false);
      setIsLoading(true);

      const result = await fetchMovies(query);
      setMovies(result);

      if (result.length === 0) {
        toast.error("No movies found for your request.");
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-center" reverseOrder={false} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movies.length > 0 && (
        <MovieGrid movies={movies} onSelectMovie={setSelectedMovie} />
      )}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
