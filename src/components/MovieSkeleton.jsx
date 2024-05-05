import PropTypes from "prop-types";
import { cn } from "../utils/utils";

const MovieSkeleton = ({ className }) => {
  return (
    <div
      data-testid="movie-skeleton"
      className={cn("card p-0 w-48 bg-base-100 shadow-xl", className)}
    >
      <figure>
        <div className="h-72 bg-gray-300 animate-pulse rounded-t-md shadow-md" />
      </figure>
      <div className="card-body p-4">
        <div className="h-4 w-full bg-gray-300 animate-pulse rounded-full mb-2" />
        <div className="h-4 w-3/4 bg-gray-300 animate-pulse rounded-full mb-2" />
        <div className="h-4 w-1/2 bg-gray-300 animate-pulse rounded-full mb-2" />
      </div>
    </div>
  );
};

MovieSkeleton.propTypes = {
  className: PropTypes.string,
};

export default MovieSkeleton;
