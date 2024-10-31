import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  /*states to manage the movies change*/
  const [movies, setMovies] = useState([]);
  /*states to manage the movies loading because we may want come spinner in the app to show white loading*/
  const [isLoading, setIsLoading] = useState(false);
  /*states to manage the errors*/
  const [error, setError] = useState(null);


  /*using useCallbacks to add a dependency in useEffect*/
  const fetchMoviesHandler = useCallback(async () => {

    /*to tell the user that the fetching is in progress*/
    setIsLoading(true);
    /*clearing the previous errors*/
    setError(null);
    try {
      const response = await fetch('https://fyp2-76c77-default-rtdb.asia-southeast1.firebasedatabase.app/lists.json');
      console.log(response);
      /*handling the errors like 404 in which we get a response*/
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const loadedMovies = [];

      for(const key in data){
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].description,
          releaseDate: data[key].asset_type_id
        })
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  /*load movies at the page loading*/
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch('https://fyp2-76c77-default-rtdb.asia-southeast1.firebasedatabase.app/lists.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    const data = await response.json()
  }

  /*refactoring the code for content*/
  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
