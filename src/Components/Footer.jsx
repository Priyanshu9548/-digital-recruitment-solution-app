import React from "react";
import mail from "../Assets/images/contact.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
  return (
    <div className="w-full bg-blue-950 py-3">
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-4/5 mx-auto md:pl-32">
        <div className="mb-4 md:mb-0 md:mr-4">
          <img src={mail} alt="" className="w-60 h-60" />
        </div>
        <div>
          <p className="text-white mb-2 text-center md:text-left">Connect with us:</p>
          <ul className="flex items-center justify-center md:justify-start list-none">
            <li className="mr-2">
              <div className="w-12 h-12 rounded-full bg-white hover:bg-black flex justify-center items-center">
                <a href="/#" rel="noreferrer" target="_blank" className="text-3xl leading-24 transition duration-300">
                  <FaGithub className="w-6 h-6 hover:text-white" />
                </a>
              </div>
            </li>
            <li className="mr-2">
              <div className="w-12 h-12 rounded-full bg-white hover:bg-red-500 flex justify-center items-center">
                <a href="/#" rel="noreferrer" target="_blank">
                  <FiMail className="w-6 h-6 hover:text-white" />
                </a>
              </div>
            </li>
            <li className="mr-2">
              <div className="w-12 h-12 rounded-full bg-white hover:bg-cyan-600 flex justify-center items-center">
                <a href="/#" rel="noreferrer" target="_blank">
                  <FaLinkedinIn className="w-6 h-6 hover:text-white" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-white flex justify-center py-3">
        © 2023, <strong>Priyanshu Sisodiya</strong>.
      </p>
    </div>
  );
}

export default Footer;
