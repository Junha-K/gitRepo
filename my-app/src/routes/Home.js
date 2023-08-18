import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home () {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async() => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`)
    ).json();

    setMovies(json.data.movies);
    console.log(json.data.movies);
    setLoading(false);
    };
  useEffect(() =>{
    getMovies();
  }, []);
  return<div>
    {loading
      ? (<h1>Loading...</h1>)
      : (<div>
          {movies.map((movie)=> (
            <Movie
              key={movie.id}
              id = {movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title_long}
              rating={movie.rating}
              synopsis={movie.synopsis}
              genres={movie.genres}
              />
          ))}
        </div>
      )}
      </div>
}
export default Home;