import React from "react";
import about from "../Assets/images/about.png";
import "./button.css";
function About({ image, title, button }) {
  return (
    <div className="w-4/5 pl-32 " id="about">
      <div className=" flex items-center">
        <div className="about__image flex-shrink-0">
          <img src={about} alt="group" />
        </div>
        <div className=" ml-20">
          <h2 className="text-[#B480AA] text-2xl"> About XYZ... </h2>
          <br />
          <p className="text-justify">
            Laura Ipsum is a variant of the well-known Lorem Ipsum placeholder
            text. It was created as a tribute to Laura Gonzalez, a talented
            designer and developer who made significant contributions to the
            design community. The Laura Ipsum text aims to showcase her love for
            clean and minimalistic design. Laura Ipsum is often used as a
            placeholder in website prototypes, graphic design projects, and
            other creative endeavors. 💟
          </p>
          {/* <button href='/#' className='bg-black rounded-md mt-4 px-3 py-3'>Contact Us</button> */}
          <div className="container1">
            <div className="btn15">
              <a href="/#" target={"_blank"} rel="noopener noreferrer">
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
