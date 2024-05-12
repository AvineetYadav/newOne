import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/constant";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#00453a] lg:px-12 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link to={`/`}>
            <img src={LOGO} alt="Logo" />
          </Link>
        </div>
        <nav className="md:flex hidden">
          <ul className="flex space-x-4">
            <li>
              <Link to={`/courselistingpage`} className="hover:text-gray-300">
                Course List
              </Link>
            </li>
            <li>
              <Link to={`/dashboard`} className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden mt-2 ml-auto">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link to={`/courselistingpage`} className="hover:text-gray-300">
                Course List
              </Link>
            </li>
            <li>
              <Link to={`/dashboard`} className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
