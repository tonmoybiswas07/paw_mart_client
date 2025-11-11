import React from "react";
import errorImg from "../../assets/error 404.jpg";
import { Link } from "react-router";
import { PawPrint } from "lucide-react";
const Error = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${errorImg})` }}
      >
        <h1 className="text-2xl md:text-5xl  font-bold text-white">
          Oops! Page Not Found
        </h1>
        <h2 className="text-center text-white font-bold text-lg md:text-2xl mt-4">
          The page you are looking for was moved, removed, <br /> renamed or
          might never existed.
        </h2>
        <Link
          to={"/"}
          className="bg-amber-600 py-6 px-10 font-bold text-white flex justify-center items-center gap-5 mt-10 rounded-full hover:bg-amber-700"
        >
          Home Page<PawPrint></PawPrint>
        </Link>
      </div>
    </div>
  );
};

export default Error;
