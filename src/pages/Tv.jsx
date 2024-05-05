import { useState, useEffect } from "react";
import axios from "axios";
import TvSeriesList from "../components/TvSeriesList";
import { BiChevronDown } from "react-icons/bi";
import { RxValueNone } from "react-icons/rx";
import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";
import { cn } from "../utils/utils";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import GenreFilter from "../components/GenreFilter";
import EmptyState from "../components/EmptyState";

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
    value: "first_air_date.asc",
    icon: <HiOutlineSortAscending />,
  },
  {
    name: "Release Date: New to Old",
    value: "first_air_date.desc",
    icon: <HiOutlineSortDescending />,
  },
  {
    name: "Title: A-Z",
    value: "name.asc",
    icon: <HiOutlineSortAscending />,
  },
  {
    name: "Title: Z-A",
    value: "name.desc",
    icon: <HiOutlineSortDescending />,
  },
];

const TvSeries = () => {
  const [filter, setFilter] = useState({
    sort: "none",
    genre: [],
  });
  const [genres, setGenres] = useState([]);

  console.log(filter);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["tvSeries", filter],
      queryFn: async ({ pageParam = 1 }) => {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/discover/tv",
          {
            params: {
              api_key: "27e5944c8fa4da41f3362a64acc866ff",
              language: "en-US",
              sort_by: filter.sort,
              with_genres: filter.genre.join(", "),
              page: pageParam,
            },
          }
        );

        return {
          results: data.results,
          pageCount: data.total_pages,
          page: pageParam,
        };
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.pageCount) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      placeholderData: keepPreviousData,
    });

  useEffect(() => {
    const fetchGenres = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/genre/tv/list",
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

  const handleSubmit = () => {
    fetchNextPage();
  };

  useEffect(() => {
    handleSubmit();
  }, [filter]);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Popular TV Shows
        </h1>

        <div>
          <div className="dropdown dropdown-end dropdown-hover">
            <div tabIndex={0} role="button" className="m-1 btn">
              Sort <BiChevronDown className="-mr-1 w-5 h-5 flex-shrink-0" />
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content z-[11] bg-base-100 rounded-box w-64"
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
      <div className="lg:hidden mt-2">
        <div className="collapse collapse-arrow justify-center border">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-lg font-medium border-b-2 border">
            Filters
          </div>
          <div className="collapse-content flex flex-col w-full">
            <h2 className="font-semibold text-left mb-4">Genres</h2>
            <ul className="flex flex-wrap p-0 gap-2 w-full bg-base-100 text-base-content">
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
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4 mt-10">
        <div className="hidden lg:block">
          <GenreFilter genres={genres} filter={filter} setFilter={setFilter} />
        </div>
        <div className="lg:col-span-3">
          {data?.pages.flatMap((page) => page.results).length === 0 && (
            <EmptyState />
          )}
          <TvSeriesList
            tvSeries={data?.pages.flatMap((page) => page.results)}
          />
          <button
            onClick={() => {
              if (hasNextPage) {
                fetchNextPage();
              }
            }}
            disabled={!hasNextPage || isFetchingNextPage}
            className="mt-6 btn btn-primary w-full"
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default TvSeries;
