import PropTypes from "prop-types";
import { useState } from "react";

const MovieList = ({ movies, onLoadMore, startIndex }) => {
  const [page, setPage] = useState(1);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
    onLoadMore(page + 1, startIndex + 20);
  };

  return (
    <div className="flex flex-wrap">
      {movies.slice(startIndex, startIndex + 20).map((movie) => (
        <div key={movie.id} className="w-1/5 p-2">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/no-image.png"
            }
            alt={movie.title}
            className="w-full h-64 object-cover rounded-md shadow-md"
          />
          <div className="h-20 text-center mt-2 overflow-hidden">
            <p className="text-gray-900">{movie.title}</p>
            <p className="text-gray-600">Release Date: {movie.release_date}</p>
          </div>
        </div>
      ))}

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
