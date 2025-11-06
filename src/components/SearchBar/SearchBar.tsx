import styles from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;
    if (!query?.trim()) {
      toast.error("Please enter your search query.");
    }
    onSearch(query);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form action={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
          <Toaster position="top-center" reverseOrder={false} />
        </form>
      </div>
    </header>
  );
}
