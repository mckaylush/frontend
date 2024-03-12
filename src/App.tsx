import React, { useState } from 'react';
import './App.css';
import movieData from './MovieData.json';

const MovieDataSample = movieData.MovieData;

function MovieList() {
  const [listoMovies, setListOfMovies] = useState(MovieDataSample);

  const addMovie = () => {
    setListOfMovies([
      ...MovieDataSample,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Tim Burton',
        Rating: 'PG-13',
      },
    ]);
  };

  return (
    <>
      <h3>Movie Collection List</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {listoMovies.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addMovie}>Add Movie</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
