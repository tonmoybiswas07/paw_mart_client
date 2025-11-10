import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/petSupplies"}>Pets &amp; Supplies</NavLink>
      <NavLink>Add Listing</NavLink>
      <NavLink>My Listings</NavLink>
      <NavLink>My Orders</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-amber-100 to-orange-50 fixed top-0 left-0 right-0 shadow z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className=" text-xl font-bold text-amber-600">
            PawMart
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <Link to="/login" className="btn bg-amber-500 text-white">
            Login
          </Link>
          <Link to="/register" className="btn bg-amber-500 text-white">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
