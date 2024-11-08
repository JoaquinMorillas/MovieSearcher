import React, { useState } from "react";
import { Card } from "./components/Card";
import "./MovieApp.css";

export const MovieApp = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3/search/movie?query=";
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData();
    console.log(movies);
  };
  const fetchData = async () => {
    setIsLoading(true);
    const url = `${baseUrl}${search}&api_key=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setMovies(data.results);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="header">
        <h1>Movie Searcher</h1>
        <form
          className="row row-cols-lg-auto g-3 align-items-center"
          onSubmit={handleSubmit}
        >
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              id="search"
              name="search"
              value={search}
              placeholder="Search Movie"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {movies.map((movie) => (
            <Card
              key={movie.id}
              imageUrl={`${imageUrl}${movie.poster_path}`}
              movieTitle={movie.title}
              movieDescription={movie.overview}
              movieReleaseYear={`${movie.release_date.slice(0, 4)}`}
            />
          ))}
        </div>
      )}
    </>
  );
};
