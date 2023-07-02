import React from "react";
import about from "../Assets/images/about.png";
import "./button.css";

function About({ image, title, button }) {
  return (
    <div className=" md:w-5/5 sm:w-[4/5] mx-auto pl-4 md:pl-0" id="about">
      <div className="flex flex-col md:flex-row items-center">
        <div className=" flex-shrink-0 mb-4 md:mb-0 md:mr-8">
          <img src={about} alt="group" className="w-full h-auto" />
        </div>
        <div className="ml-0 md:ml-8">
          <h2 className="text-[#B480AA] text-2xl mb-2 md:mb-4 "> About XYZ... </h2>
          <p className="text-justify mr-4">
            Laura Ipsum is a variant of the well-known Lorem Ipsum placeholder
            text. It was created as a tribute to Laura Gonzalez, a talented
            designer and developer who made significant contributions to the
            design community. The Laura Ipsum text aims to showcase her love for
            clean and minimalistic design. Laura Ipsum is often used as a
            placeholder in website prototypes, graphic design projects, and
            other creative endeavors. 💟
          </p>
          <div className="container1 mt-4">
            <div className="btn15">
              <a href="/#" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
