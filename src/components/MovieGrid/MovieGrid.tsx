import css from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";
interface MovieGridProps {
  // onSelect: () => void;
  movies: Movie[];
}

export default function MovieGrid({movies}: MovieGridProps) {

const baseUrl = "https://image.tmdb.org/t/p/w300";


    //    <p className={css.text}>Loading movies, please wait...</p>   - Індикатор завантаження Loader
    //   <p className={css.text}>There was an error, please try again...</p>   -Повідомлення про помилку ErrorMessage
  return  ( 
    <>
      <ul className={css.grid}>
        {movies.map(movie => (
          <li key={movie.id}>
          <div className={css.card}>
            <img
              className={css.image}
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>)
        )}
        
      </ul>
    </>
  );
}
