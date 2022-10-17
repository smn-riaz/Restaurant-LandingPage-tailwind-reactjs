import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
           <li className="hover:text-orange-600">
                <HashLink smooth to="/#home">Home</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#popular">Popular</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#about">About</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#menu">Menu</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#chefs">Chefs</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#blog">Blog</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#contact">Contact</HashLink>
              </li>
          </ul>
        </div>
        <Link to="/" className="font-semibold px-1 normal-case text-md sm:text-2xl font-great-vibes">RESTAURANT</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-semibold">
        <li className="hover:text-orange-600">
                <HashLink smooth to="/#home">Home</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#popular">Popular</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#about">About</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#menu">Menu</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#chefs">Chefs</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#blog">Blog</HashLink>
              </li>
              <li className="hover:text-orange-600">
                <HashLink smooth to="/#contact">Contact</HashLink>
              </li>
        </ul>
      </div>
      <div className="navbar-end">
          <button
              type="button"
              className="transition duration-700 ease-in-out bg-orange-500 text-white  hover:bg-orange-600  focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-3xl text-sm px-2 sm:px-5 py-2.5 text-center mr-3 md:mr-0 border-2"
            >
             <HashLink smooth to="/">BOOK A TABLE</HashLink>
            </button>
      </div>
    </div>
  );
};

export default Navbar;
