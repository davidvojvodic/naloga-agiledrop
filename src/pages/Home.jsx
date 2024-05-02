import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import { BiChevronDown } from "react-icons/bi";
import { RxValueNone } from "react-icons/rx";
import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";
import { cn } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";

const SORT_OPTIONS = [
  {
    name: "None",
    value: "none",
    icon: <RxValueNone />,
  },
  {
    name: "Popularity: Low to High",
    value: "popularity.asc",
    icon: <HiOutlineSortAscending />,
  },
  {
    name: "Popularity: High to Low",
    value: "popularity.desc",
    icon: <HiOutlineSortDescending />,
  },
  {
    name: "Rating: Low to High",
    value: "vote_average.asc",
    icon: <HiOutlineSortAscending />,
  },
  {
    name: "Rating: High to Low",
    value: "vote_average.desc",
    icon: <HiOutlineSortDescending />,
  },
  {
    name: "Release Date: Old to New",
    value: "release_date.asc",
    icon: <HiOutlineSortAscending />,
  },
  {
    name: "Release Date: New to Old",
    value: "release_date.desc",
    icon: <HiOutlineSortDescending />,
  },
  {
    name: "Title: A-Z",
    value: "title.asc",
    icon: <HiOutlineSortAscending />,
  },
  {
    name: "Title: Z-A",
    value: "title.desc",
    icon: <HiOutlineSortDescending />,
  },
];

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState({
    sort: "none",
    genre: [],
  });
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  console.log(filter);

  const { refetch } = useQuery({
    queryKey: ["movies", filter, page],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: "27e5944c8fa4da41f3362a64acc866ff",
            language: "en-US",
            sort_by: filter.sort,
            with_genres: filter.genre,
            page: page,
            start_index: startIndex,
          },
        }
      );
      setMovies(data.results);
      console.log(data.results);
      return {
        results: data.results,
        pageCount: data.total_pages,
      };
    },
  });

  useEffect(() => {
    const fetchGenres = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          params: {
            api_key: "27e5944c8fa4da41f3362a64acc866ff",
          },
        }
      );
      setGenres(data.genres);
    };

    fetchGenres();
  }, []);

  const onSubmit = () => refetch();

  const loadMoreMovies = (page, startIndex) => {
    setPage((prevPage) => prevPage + 1);
    setStartIndex((prevStartIndex) => prevStartIndex + 20);
    refetch({
      page: page,
      with_genres: filter.genre,
      sort_by: filter.sort,
      startIndex: startIndex + 20,
    });
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Popular Movies
        </h1>

        <div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1 btn">
              Sort <BiChevronDown className="-mr-1 w-5 h-5 flex-shrink-0" />
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-64"
            >
              {SORT_OPTIONS.map((option) => (
                <li className="flex" key={option.name}>
                  <button
                    className={cn(
                      "btn w-full flex justify-start items-center",
                      filter.sort === option.value && "text-blue-500"
                    )}
                    onClick={() => {
                      setFilter((prev) => ({
                        ...prev,
                        sort: option.value,
                      }));

                      onSubmit();
                    }}
                  >
                    {option.icon}
                    {option.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <div className="hidden lg:block">
          <div className="collapse collapse-arrow justify-start border">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-medium">Genres</div>
            <div className="collapse-content">
              <ul className="menu p-0 w-56 bg-base-100 text-base-content">
                {genres.map((genre) => (
                  <li key={genre.id}>
                    <button
                      className={cn(
                        "btn w-full flex justify-center items-center",
                        filter.genre === genre.id && "text-blue-500"
                      )}
                      onClick={() => {
                        setFilter((prev) => ({
                          ...prev,
                          genre: genre.id,
                        }));

                        onSubmit();
                      }}
                    >
                      {genre.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <MovieList
            movies={movies}
            onLoadMore={loadMoreMovies}
            startIndex={startIndex}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
