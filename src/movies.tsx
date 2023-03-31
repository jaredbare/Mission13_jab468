import data from './MovieData.json';
import React, { useState } from 'react';

const MovieData = data.MovieData;

function MovieList() {
  const [listofMovies, setListOfMovies] = useState(MovieData);
  const addMovie = () => {
    setListOfMovies([
      ...MovieData,
      {
        Category: 'Drama',
        Title: 'The Godfather',
        Year: 1972,
        Director: 'Francis Ford Coppola',
        Rating: 'pg-13',
      },
    ]);
  };

  return (
    <>
      <div>
        <h1>Movie List</h1>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Movie Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listofMovies.map((movie) => (
              <tr>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Director}</td>
                <td>{movie.Rating}</td>
                <td>{movie.Category}</td>
                <td>{movie.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}

export default MovieList;
