import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="bg-gradient-to-r from-orange-200 via-amber-200 to-yellow-200

">
      <Navbar></Navbar>
      <div className="min-h-93">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
