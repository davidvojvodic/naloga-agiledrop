import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: '27e5944c8fa4da41f3362a64acc866ff',
          language: 'en-US',
          page: 1,
        },
      });

      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold text-center mb-8">Popular Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;