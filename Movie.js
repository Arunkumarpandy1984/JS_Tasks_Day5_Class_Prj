class Movie {
  // here constructors are special methods with special keyword constructor
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

function getPGMovies(movies) {
  return movies.filter((movie) => {
    return movie.rating === "PG";
  });
}

const locMovie = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log("Movie :", locMovie);

const movies = [
  new Movie("Movie_1", "Studio_1", "PG13"),
  new Movie("Movie_2", "Studio_2", "PG"),
  new Movie("Movie_3", "Studio_3", "PG"),
];

let pgMovies = getPGMovies(movies);

console.log("Printing PG Movies :", pgMovies);
