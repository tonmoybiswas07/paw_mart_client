import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { AuthContext } from "../AuthContext/AuthContext";
import { CircularProgress } from "react-loader-spinner";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const { user, signoutUserFunc, setUser, loading, setLoading } =
    useContext(AuthContext);
  console.log(user);

  const handleSignout = () => {
    setLoading(true);
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };


 
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/petSupplies"}>Pets &amp; Supplies</NavLink>
      {user ? (
        <>
          <NavLink to={"/addListing"}>Add Listing</NavLink>
          <NavLink to={"/mylisting"}>My Listings</NavLink>
          <NavLink to={"/myorder"}>My Orders</NavLink>
        </>
      ) : null}
    </>
  );

  return (
    <div>
     <div className="navbar py-2 bg-gradient-to-r from-orange-200 via-amber-200 to-yellow-200
 fixed top-0 left-0 right-0 shadow z-50 flex justify-between items-center px-4">
  {/* Left: Logo + Mobile menu */}
  <div className="flex items-center gap-4">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-amber-100 text-black rounded-box z-50 w-56 mt-3 p-2 shadow"
      >
        {links}
      </ul>
    </div>
    <Link to={"/"} className="text-xl font-bold text-amber-600">
      PawMart
    </Link>
  </div>

  {/* Center: Desktop Links */}
  <div className="hidden lg:flex justify-center items-center">
    <ul className="menu menu-horizontal px-1 gap-5 text-black">
      {links}
    </ul>
  </div>

  {/* Right: User/Login Buttons */}
  <div className="flex items-center gap-3">
    {loading ? (
      <CircularProgress
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="circular-progress-loading"
        strokeWidth={2}
      />
    ) : user ? (
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="cursor-pointer">
          <img
            src={user?.photoURL || "https://via.placeholder.com/88"}
            className="h-10 w-10 rounded-full border-2 border-amber-800"
            alt="user"
          />
        </div>
        <div className="dropdown-content menu bg-base-100 rounded-box w-60 p-2 shadow-sm">
          <h2 className="text-xl font-semibold">{user?.displayName}</h2>
          <p>{user?.email}</p>
          <button
            onClick={handleSignout}
            className="bg-amber-800 px-8 font-bold text-white rounded-full mt-2 py-3"
          >
            Sign Out
          </button>
        </div>
      </div>
    ) : (
      <>
        <Link to="/login">
          <StyledWrapper>
            <button className="animated-button ">
              <span>Login</span>
              <span />
            </button>
          </StyledWrapper>
        </Link>
        <Link to="/register">
          <StyledWrapper>
            <button className="animated-button">
              <span>Register</span>
              <span />
            </button>
          </StyledWrapper>
        </Link>
      </>
    )}
  </div>
</div>

    </div>
  );
};

const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    display: inline-block;
    padding: 12px 24px;
    border: none;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;

    box-shadow: 0 0 0 2px #ffffff20;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button span:last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #2196f3;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button span:first-child {
    position: relative;
    z-index: 1;
  }

  .animated-button:hover {
    box-shadow: 0 0 0 5px #2195f360;
    color: #ffffff;
  }

  .animated-button:active {
    scale: 0.95;
  }

  .animated-button:hover span:last-child {
    width: 150px;
    height: 150px;
    opacity: 1;
  }
`;

export default Navbar;
