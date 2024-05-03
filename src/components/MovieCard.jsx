import { format } from "date-fns";
import PropTypes from "prop-types";
import { cn } from "../utils/utils";
import { CiMenuKebab } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const percentage = Math.round(movie.vote_average * 10);
  let colorClass;

  if (percentage > 70) {
    colorClass = "text-green-500";
  } else if (percentage > 30) {
    colorClass = "text-yellow-500";
  } else {
    colorClass = "text-red-500";
  }

  return (
    <div className="card p-0 w-48 bg-base-100 shadow-xl relative">
      <div className="dropdown dropdown-hover dropdown-end absolute top-1 right-2 z-10 ">
        <div
          tabIndex={0}
          role="button"
          className="m-1 bg-white/90 flex items-center justify-center rounded-full w-6 h-6"
        >
          <CiMenuKebab className="rotate-90" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64"
        >
          <p className="p-2 text-left font-semibold">
            Want to rate or add this item to a list?
          </p>
          <li className="text-left">
            <a>
              Login <FaArrowRight />
            </a>
          </li>
          <p className="p-2 text-left font-semibold">Not a member?</p>
          <li>
            <a>
              Sign up <FaArrowRight />
            </a>
          </li>
        </ul>
      </div>
      <figure className="relative">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/no-image.png"
          }
          alt={movie.title}
          className="w-full h-72 object-cover rounded-t-md shadow-md"
        />
      </figure>
      <div className="card-body relative p-4">
        <div className="absolute top-[-20px]">
          <div
            className={cn(
              "radial-progress bg-[#081c22] text-white font-semibold border-2 border-[#081c22]",
              colorClass
            )}
            style={{
              "--value": percentage,
              "--size": "30px",
              "--thickness": "2px",
            }}
            role="progressbar"
          >
            <p className="text-[11px]">{percentage}%</p>
          </div>
        </div>
        <h2 className="card-title text-left text-base font-bold">
          {movie.title}
        </h2>
        <p className="text-sm text-left text-gray-500">{movie.release_date}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
