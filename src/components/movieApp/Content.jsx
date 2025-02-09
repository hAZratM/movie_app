import initialMovies from "../assets/data.movie";

const Content = () => {
  const allMovies = initialMovies.map(
    ({ id, title, genre, year, rating, image }) => (
      <div key={id} className="card ">
        <div className="card__image h-50 overflow-hidden rounded-2xl border-1 border-gray-700 mb-4">
          <img src={image} alt={title} className="object-cover" />
        </div>
        <div className="font-lato">
          <h1 className="text-xl ">
            <span className="uppercase font-playfair">Title:</span> {title}
          </h1>
          <p className="text-slate-200/70">Release Year: {year}</p>
          <p className="text-slate-200/70">Genre: {genre} </p>
          <p className="text-slate-200/70">Ratings: {rating} </p>
        </div>
      </div>
    )
  );

  const uniqueGenre = initialMovies.reduce(
    (acc, movie) => {
      // !acc.includes(movie.genre) ? acc.push(movie.genre) : acc;
      if (!acc.includes(movie.genre)) {
        acc.push(movie.genre);
      }
      return acc;
    },
    ["All"]
  );

  return (
    <main className="mt-10">
      <section className="mb-6 flex justify-end font-lato">
        <select
          name="genre"
          id="genre"
          className=" py-2 px-2 rounded-md focus:outline-1 focus:outline-slate-700"
        >
          {uniqueGenre.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </section>
      <section className="flex flex-col gap-6" id="movie__cards">
        {allMovies}
      </section>
    </main>
  );
};

export default Content;
