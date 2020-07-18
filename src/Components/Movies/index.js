import React, { useEffect, useState } from "react";

import spinner from "./ajax-loader.gif";
import Movie from "./Movie";
import axios from "axios";

const movieName = "bangalore";

const MOVIE_API_URL = `https://www.omdbapi.com/?s=${movieName}&apikey=f520f6c`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(MOVIE_API_URL).then((jsonResponse) => {
      if (jsonResponse.data.Response === "True") {
        setMovies(jsonResponse.data.Search);
        setLoading(false);
      } else {
        setErrorMessage(jsonResponse.data.Error);
        setLoading(false);
      }
    });
  }, []);

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (
    <div className="">
      <div className="m-container">
        <div className="movies">{retrievedMovies}</div>
      </div>
    </div>
  );
};

export default Movies;
