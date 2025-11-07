import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";
interface MovieGridProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelectMovie }: MovieGridProps) {
  return (
    <>
      <ul className={css.grid}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div className={css.card} onClick={() => onSelectMovie(movie)}>
              <img
                className={css.image}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : "https://placehold.co/300x450?text=No+Image"
                }
                alt={movie.title || "No image available"}
                loading="lazy"
              />
              <h2 className={css.title}>{movie.title}</h2>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
