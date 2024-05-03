import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import TvSeriesCard from "./TvSeriesCard";
import MovieSkeleton from "./MovieSkeleton";

const TvSeriesList = ({ tvSeries, onLoadMore, startIndex }) => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const loadMoreTvSeries = () => {
    setPage((prevPage) => prevPage + 1);
    onLoadMore(page + 1, startIndex + 20);
  };

  return (
    <div className="flex flex-wrap gap-6">
      {isLoading
        ? Array.from({ length: 20 }).map((_, index) => (
            <MovieSkeleton key={index} className="animate-pulse" />
          ))
        : tvSeries
            .slice(startIndex, startIndex + 20)
            .map((tvSeries) => (
              <TvSeriesCard key={tvSeries.name} tvSeries={tvSeries} />
            ))}

      <button className="btn-grad" onClick={loadMoreTvSeries}>
        Load More
      </button>
    </div>
  );
};

TvSeriesList.propTypes = {
  tvSeries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      first_air_date: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLoadMore: PropTypes.func.isRequired,
  startIndex: PropTypes.number.isRequired,
};

export default TvSeriesList;
