import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="drawer">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <nav className="bg-[#032541] navbar p-4">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="drawer"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
            <div className="flex-1 flex">
              <Link to="/" className="flex items-center">
                <img src="/logo.svg" alt="Logo" width={154} height={20} />
              </Link>
              <ul className="hidden lg:flex ml-6 space-x-8 font-semibold">
                <li>
                  <Link to="/" className="text-white hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/movies" className="text-white hover:text-gray-300">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link to="/tv" className="text-white hover:text-gray-300">
                    TV Series
                  </Link>
                </li>
                <li>
                  <Link to="/people" className="text-white hover:text-gray-300">
                    People
                  </Link>
                </li>
                <li>
                  <div className="dropdown dropdown-hover dropdown-bottom dropdown-start">
                    <Link
                      tabIndex={0}
                      role="button"
                      className="text-white hover:text-gray-300"
                    >
                      More
                    </Link>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Support</a>
                      </li>
                      <li>
                        <a>API</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex gap-4">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-24 md:w-auto hidden lg:block"
                />
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar flex items-center justify-center"
                >
                  <div className="w-10 rounded-full">
                    <FaUser className="w-full h-full" color="white" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-y-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full"
            />
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/tv">TV Series</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-start">
              <Link to="/">More</Link>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Support</a>
                </li>
                <li>
                  <a>API</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
