import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Store/auth.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bg1 from "../Assets/images/loginBg.png";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Navigate to the home page if already logged in
    }
  }, []);

  if (isLoggedIn) {
    return null; // Render nothing if already logged in
  }

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform field validation
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    // Create user object
    const user = {
      email,
      password,
    };

    // Dispatch the login action
    dispatch(login(user));

    // Clear the form fields
    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-100 opacity-90"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <div className="bg-white  px-16 py-16 rounded-3xl ">
        <h2 className="text-black text-4xl mb-8 font-semibold">Log in</h2>

        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-gray-700 text-base font-bold mt-3"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="block text-gray-700 text-base font-bold mt-3"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-20 h-10 text-white bg-violet-600 rounded-md flex items-center justify-center cursor-pointer hover:opacity-80 transition mt-4 ml-auto mr-auto"
          >
            Login
          </button>
        </form>
        <div className="">
          <span>Don't have an account. </span>
          <Link
            to="/signup"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
