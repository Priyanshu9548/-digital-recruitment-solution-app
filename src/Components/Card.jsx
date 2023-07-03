import React from "react";
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
const defaultImageDataURI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='000000' fill-opacity='0.25' viewBox='0 0 24 24'%3E %3Cpath d='M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25 0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z' /%3E %3C/svg%3E";

const addDefaultImg = (e) => {
  // prevent infinite callbacks if 404 image fails
  e.target.onError = null;
  e.target.src = defaultImageDataURI;
};

const Card = ({ user }) => {
  console.log(user)
  let { img, name, jobTitle, location, links } = user;
  const { city, state, country } = location;
  if (user.id) {
    return (
      <div
  id={`person-${user.id}`}
  className="card bg-gray-100 rounded-sm shadow-lg shadow-outline hover:shadow-xl hover:scale-105"
>
  <div className="relative pt-3 rounded-lg  w-[243px] h-[350px]">
  <div className="bg-violet-300 hover:bg-violet-400 h-[290px] flex flex-col items-center justify-center w-full rounded-t-lg">
  <img
    className="rounded-full bg-center object-cover w-3/4"
    src={img || defaultImageDataURI}
    alt={name}
    loading="lazy"
    onError={(e) => addDefaultImg(e)}
  />
  <h2 className="bg-violet-200 hover:bg-violet-300 h-7 rounded-md mt-3 mb-1 px-3 text-center overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">
    {name}
  </h2>
</div>

    <p className="title text-center flex justify-center items-center rounded-bl-lg rounded-br-lg overflow-hidden overflow-ellipsis whitespace-nowrap bg-violet-200 hover:bg-violet-300 h-9 font-medium">
      {jobTitle}
    </p>
  </div>
  <div className=" flex text-sm justify-center items-center gap-2 text-center overflow-hidden overflow-ellipsis whitespace-nowrap">
    <p className="max-w-[100px]">
      {city}
    </p>
    <p className="max-w-[100px]">
      {state}
    </p>
    <p className="max-w-[100px]">
      {country}
    </p>
  </div>

  <div className="footer pb-3">
    {/* {email && (
      <a
        href={`mailto:${email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="link dim custom--link primary"
      >
        {email}
      </a>
    )} */}
    {links && (
      <div className="mt-3 flex gap-2 justify-center items-center ">
  {links.website && (
    <a
      href={links.website}
      target="_blank"
      rel="noopener noreferrer"
      className="link dim custom--link primary flex items-center justify-center"
    >
      <FiExternalLink className="hover:text-blue-500 text-2xl" />
    </a>
  )}
  {links.github && (
    <a
      href={links.github}
      target="_blank"
      rel="noopener noreferrer"
      className="link dim custom--link primary flex items-center justify-center"
    >
      <FaGithub className="text-2xl" />
    </a>
  )}
  {links.linkedin && (
    <a
      href={links.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="link dim custom--link primary flex items-center justify-center"
    >
      <FaLinkedin className="hover:text-blue-500 text-2xl" />
    </a>
  )}
</div>

    )}
  </div>
</div>

    );
  } else {
    return null;
  }
};

export default Card;
