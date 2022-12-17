import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const logOut = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li className="text-xl hover:bg-accent hover:text-white rounded-lg">
        <Link to="/home">Home</Link>
      </li>
      <li className="text-xl hover:bg-accent hover:text-white rounded-lg">
        <Link to="/about">About</Link>
      </li>
      <li className="text-xl hover:bg-accent hover:text-white rounded-lg">
        <Link to="/appointment">Appointment</Link>
      </li>
      <li className="text-xl hover:bg-accent hover:text-white rounded-lg">
        <Link to="/reviews">Reviews</Link>
      </li>
      <li className="text-xl hover:bg-accent hover:text-white rounded-lg">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="text-xl hover:bg-accent hover:text-white rounded-lg">
        {user ? (
          <button onClick={logOut} className="btn btn-ghost text-lg flex justify-center items-center">
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <header className="navbar justify-between bg-base-100 border-b border-primary">
      <div className="navbar-start w-1/4">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a href="'" className="btn btn-ghost normal-case text-3xl hover:bg-white">
          Doctors Portal
        </a>
      </div>
      <div className="navbar-end hidden lg:flex w-auto">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </header>
  );
};

export default Navbar;
