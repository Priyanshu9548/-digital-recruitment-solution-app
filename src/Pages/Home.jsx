import React from "react";
//import About from "../Components/About";
import bg from "../Assets/images/hero.jpeg";
const Home = () => {
  return (
    <div
      className="w-[100%] min-h-[45rem] bg-no-repeat bg-cover bg-center flex items-center "
      style={{
        backgroundImage: `url(${bg})`,
      }}
      id="home"
    >
      {" "}
      <div className="flex w-4/5 ml-4 md:ml-auto mr-auto gap-1">
        <div className="w-2/3 md:w-auto pl-32">
          <h1 className="text-[52px] m-0 tracking-wide text-black">
            <span className="text-purple-700 font-extrabold">
              Stress-Free Hiring
            </span>
          </h1>
          <div className="w-5/12 text-4xl text-gray-700 mt-4 font-normal leading-relaxed">
            with simplistic design and visual organization
          </div>
          <p className="w-1/2 mt-4 flex text-justify">Are you tired of the tedious and time-consuming hiring process? Look no further! Our cutting-edge online recruitment solution is here to revolutionize your hiring experience. With our platform, hiring managers and HR professionals can enjoy a streamlined and efficient recruitment process that saves time, reduces costs, and delivers exceptional results.</p>
        </div>
      </div>
    </div>
   
  );
};

export default Home;
