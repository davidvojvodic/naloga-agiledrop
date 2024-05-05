import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieSkeleton from "./MovieSkeleton";

const MovieList = ({ movies }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Uporaba setTimeout za simulacijo nalaganja skeletona
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {isLoading
        ? Array.from({ length: 20 }).map((_, index) => (
            <MovieSkeleton key={index} className="animate-pulse" />
          ))
        : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
