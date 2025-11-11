import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { AuthContext } from "../AuthContext/AuthContext";

const Navbar = () => {
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
      <NavLink to={"/addListing"}>Add Listing</NavLink>
      <NavLink to={"/mylisting"}>My Listings</NavLink>
      <NavLink to={"/myorder"}>My Orders</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar py-2 bg-gradient-to-r from-amber-100 to-orange-50 fixed top-0 left-0 right-0 shadow z-50">
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

        {loading ? (
          <p>loading.....</p>
        ) : user ? (
          <div className="text-center space-y-3">
            <button
              className=""
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" }}
            >
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-10  w-10 rounded-full mx-auto border-2 border-amber-800"
                alt=""
              />
            </button>

            <div
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={{ positionAnchor: "--anchor-1" }}
            >
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="pl-7">{user?.email}</p>
              <button
                onClick={handleSignout}
                className="bg-amber-800 px-8 font-bold text-white rounded-full mt-2 py-3"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="navbar-end gap-3">
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
          </div>
        )}
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
