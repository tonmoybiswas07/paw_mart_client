import React, { useContext, useState } from "react";
import { User, Mail, Lock, Image, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    setUser,
    setLoading,
    signInWithGoogleFunc,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    const reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

    if (!reg.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        return updateProfileFunc(name, photoURL).then(() => res);
      })
      .then((res) => {
        setUser(res.user);
        toast.success("Signup successful!");
        navigate("/login");
      })
      .catch((e) => {
        console.error(e);
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithGoogleFunc()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        navigate("/");
        toast.success("Signin successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen mt-16">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <User className="w-10 h-10 text-amber-600 mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-amber-500">
              <User className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 outline-none text-gray-700"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-amber-500">
              <Mail className="w-4 h-4 text-gray-400" />
              <input
                type="email"
                name="email"
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
                name="password"
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

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Photo URL
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-amber-500">
              <Image className="w-4 h-4 text-gray-400" />
              <input
                type="url"
                name="photoURL"
                placeholder="Enter your photo URL"
                className="w-full p-2 outline-none text-gray-700"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 rounded-lg transition-colors"
          >
            Register
          </button>

          <button
            onClick={handleGoogleSignin}
            type="button"
            className="w-full border border-gray-300 text-gray-700 font-semibold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-amber-600 font-medium hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
