import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import TvSeriesCard from "./TvSeriesCard";
import MovieSkeleton from "./MovieSkeleton";

const TvSeriesList = ({ tvSeries }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-wrap gap-6">
      {isLoading
        ? Array.from({ length: 20 }).map((_, index) => (
            <MovieSkeleton key={index} className="animate-pulse" />
          ))
        : tvSeries.map((tvSeries) => (
            <TvSeriesCard key={tvSeries.id} tvSeries={tvSeries} />
          ))}
    </div>
  );
};

TvSeriesList.propTypes = {
  tvSeries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      name: PropTypes.string,
      first_air_date: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ),
};

export default TvSeriesList;
