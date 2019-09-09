import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';


const Movie = (props) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
    .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
    .then(response => {
      setMovie(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, [props.match.params.id]);


  const saveMovie = () => {
    props.addToSavedList(movie);
  };


  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">

      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>Save</div>
    </div>
  );
}

export default Movie;
