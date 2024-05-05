import PropTypes from "prop-types";
import { cn } from "../utils/utils";

const GenreFilter = ({ genres, filter, setFilter }) => {
  const handleFilterChange = (genreId, isChecked) => {
    if (isChecked) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        genre: [...prevFilter.genre, genreId],
      }));
    } else {
      setFilter((prevFilter) => ({
        ...prevFilter,
        genre: prevFilter.genre.filter((id) => id !== genreId),
      }));
    }
  };

  return (
    <div className="collapse collapse-arrow justify-center border">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-lg font-medium pb-0">Filters</div>
      <div className="collapse-content">
        <div className="divider divider-primary mt-0"></div>
        <h2 className="font-semibold text-left text-primary">Genres</h2>
        <div className="divider divider-primary mt-0"></div>
        <ul className="flex flex-wrap p-0 gap-2 w-56 bg-base-100 text-base-content">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className={cn(
                "border px-2 py-1 rounded-full hover:bg-blue-100 hover:border-blue-300 hover:text-blue-500",
                {
                  "bg-blue-100 border-blue-300 text-blue-500 font-semibold":
                    filter.genre.includes(genre.id),
                  "bg-base-100 border-base-300 text-base-content":
                    !filter.genre.includes(genre.id),
                }
              )}
            >
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="hidden"
                  name="genre"
                  value={genre.id}
                  checked={filter.genre.includes(genre.id)}
                  onChange={(e) =>
                    handleFilterChange(genre.id, e.target.checked)
                  }
                />
                <span className="cursor-pointer">{genre.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

GenreFilter.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.shape({
    genre: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default GenreFilter;
