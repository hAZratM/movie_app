import { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";

const API_BASE_URL = "https://movie-database-api1.p.rapidapi.com";

const API_KEY = import.meta.env.VITE_MDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "movie-database-api1.p.rapidapi.com",
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const fetchMovies = async () => {
    setIsloading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/list_movies.json?limit=20&sort_by=like_count&order_by=desc&with_rt_ratings=true`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch Movies");
      }

      const data = await response.json();
      const movieData = data.data;

      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch Movies");
        setMovieList([]);
        return;
      }

      console.log(movieData);
      setMovieList(movieData.movies || []);
    } catch (e) {
      console.error("Error fetching movies: ", e);
      setErrorMessage("Error Fetching Movies. Please Try again Later.");
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <h1>
              <img src="./hero.png" alt="Hero Banner" />
              Find <span className="text-gradient">Movies</span> You&apos;ll
              Enjoy without the husttle
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>

          <section className="all-movies">
            <h2 className="mt-[40px]">All Movies</h2>
            {isloading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
