import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../Store/auth.jsx";
import { useNavigate,Link } from "react-router-dom";
import bg1 from "../Assets/images/loginBg.png";

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
let navigate= useNavigate();
const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Navigate to the login page if not logged in
    }
  },);

  if (isLoggedIn) {
    return null; // Render nothing if not logged in
  }
  const handleSignup = (e) => {
    e.preventDefault();

    // Perform field validation
    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Create user object
    const user = {
      name,
      email,
      password,
    };

    // Dispatch the register action
    dispatch(login(user));

    // Clear the form fields
    setName('');
    setEmail('');
    setPassword('');
    navigate("/")
  };

  return (
    <div
    className="flex items-center justify-center h-screen bg-gray-100 opacity-90"
    style={{
      backgroundImage: `url(${bg1})`,
    }}
  >
    <div className="bg-white  px-16 py-16 rounded-3xl ">
      <h2 className="text-black text-4xl mb-8 font-semibold">Sign up</h2>
      <form onSubmit={handleSignup}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mt-2">
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
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mt-2">
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
          Signup
        </button>
      </form>
      <div className="">
          <span>Already have an account. </span>
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Log in
          </Link>
        </div>
    </div>
    </div>
  );
};

export default Signup;
