import React, { useState } from "react";
import { Lock, LogIn, Mail, PawPrint, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <PawPrint className="w-10 h-10 text-amber-600 mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">PawMart Login</h1>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-amber-500">
              <Mail className="w-4 h-4 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 outline-none text-gray-700"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-amber-500">
              <Lock className="w-4 h-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-2 outline-none text-gray-700"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" /> Login
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 text-gray-700 font-semibold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Login with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-amber-600 font-medium hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
