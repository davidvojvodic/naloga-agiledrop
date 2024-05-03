import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieSkeleton from "./MovieSkeleton";

const MovieList = ({ movies, onLoadMore, startIndex }) => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
    onLoadMore(page + 1, startIndex + 20);
  };

  return (
    <div className="flex flex-wrap gap-6">
      {isLoading
        ? Array.from({ length: 20 }).map((_, index) => (
            <MovieSkeleton key={index} className="animate-pulse" />
          ))
        : movies
            .slice(startIndex, startIndex + 20)
            .map((movie) => <MovieCard key={movie.title} movie={movie} />)}

      <button className="btn-grad" onClick={loadMoreMovies}>
        Load More
      </button>
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
    })
  ).isRequired,
  onLoadMore: PropTypes.func.isRequired,
  startIndex: PropTypes.number.isRequired,
};

export default MovieList;
