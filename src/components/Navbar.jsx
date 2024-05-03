import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#032541] navbar p-4">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <div className="flex-1 flex">
          <img src="/logo.svg" alt="Logo" width={154} height={20} />
          <ul className="flex ml-6 space-x-8 font-semibold">
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
          </ul>
        </div>
        <div className="flex gap-4">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
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
  );
};

export default Navbar;
