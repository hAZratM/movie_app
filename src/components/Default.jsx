import { useState } from "react";

const Default = () => {
  const initialMovies = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: 8.8,
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      rating: 9.0,
    },
  ];

  const [movies, setMovies] = useState(initialMovies);

  const handleClick = () =>
    setMovies(
      movies.map((movie) =>
        movie.id === 1 ? { ...movie, rating: "Bromance" } : movie
      )
    );
  return (
    <div>
      {movies.map((movie, index) => (
        <p className="font-playfair" key={index}>
          {movie.title}
          <span className="ml-4 opacity-50 hover:opacity-70">
            {movie.rating}
          </span>
        </p>
      ))}

      <button className="p-1 my-2 rounded-md font-lato" onClick={handleClick}>
        Change Name
      </button>
    </div>
  );
};

export default Default;
