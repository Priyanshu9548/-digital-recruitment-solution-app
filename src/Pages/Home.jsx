import React, { useEffect } from "react";

//import About from "../Components/About";
import bg from "../Assets/images/hero.jpeg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  let navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login"); // Navigate to the login page if not logged in
    }
  }, []);

  if (!isLoggedIn) {
    return null; // Render nothing if not logged in
  }
  return (
    <>
    <Navbar />
      <div
        className="w-full min-h-[45rem] bg-no-repeat bg-cover bg-center flex items-center "
        style={{
          backgroundImage: `url(${bg})`,
        }}
        id="home"
      >
        <div className="flex w-11/12 mx-auto md:w-4/5">
          <div className="w-11/12 md:w-2/3 md:pl-32">
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-3xl m-0 tracking-wide text-black">
              <span className="text-purple-700 font-extrabold">
                Stress-Free Hiring
              </span>
            </h1>
            <div className="w-10/12 md:w-5/12 text-2xl text-gray-700 mt-4 font-normal leading-relaxed">
              with simplistic design and visual organization
            </div>
            <p className="w-10/12 md:w-1/2 mt-4 text-justify">
              Are you tired of the tedious and time-consuming hiring process?
              Look no further! Our cutting-edge online recruitment solution is
              here to revolutionize your hiring experience. With our platform,
              hiring managers and HR professionals can enjoy a streamlined and
              efficient recruitment process that saves time, reduces costs, and
              delivers exceptional results.
            </p>
          </div>
        </div>
      </div>
      <About /> <Footer />
    </>
  );
};

export default Home;
