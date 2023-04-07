import { Movie } from '../types/movie';
import { useEffect, useState } from 'react';

function ApiMovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('https://localhost:4000/movie');
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="row">
        <h4>Movie List</h4>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Title</th>
            <th scope="col">Director</th>
            <th scope="col">Year</th>
            <th scope="col">Rating</th>
            <th scope="col">Edited</th>
            <th scope="col">Lent To</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.movieID}>
              <td>{movie.category}</td>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.year}</td>
              <td>{movie.rating}</td>
              <td>{movie.edited}</td>
              <td>{movie.lentTo}</td>
              <td>{movie.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiMovieList;
