import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/avatar.jpeg";
import "./Nav.css";

function Nav(props) {
  useEffect(() => {
    let main = document.querySelector(".recommended");
    let movie = document.querySelector(".movie");
    let series = document.querySelector(".series");
    let bookmark = document.querySelector(".bookmark");
    if (props.active === "movie") {
      movie.classList.add("active");
    } else if (props.active === "series") {
      series.classList.add("active");
    } else if (props.active === "bookmark") {
      bookmark.classList.add("active");
    } else if (props.active === "recommended") {
      main.classList.add("active");
    }
  });

  return (
    <nav className="text-white rounded-xl lg:w-24 lg:h-screen flex lg:flex-col lg:justify-center lg:items-center md:w-screen sm:w-screen md:h-24 sm:h-24 vs:h-20 md:justify-center sm:justify-center md:items-center sm:items-center vs:w-full vs:items-center vs:justify-center  nav  ">
      <Link
        className="lg:text-4xl md:text-3xl sm:text-3xl vs:text-2xl flex justify-center items-center lg:mt-8 lg:w-full lg:h-1/6 md:w-1/6 vs:w-1/6 md:h-full  sm:h-full sm:w-1/6 logo"
        to="/"
      >
        <i className="fa-solid fa-clapperboard cursor-pointer"></i>
      </Link>
      <div className="lg:text-4xl md:text-3xl sm:text-3xl vs:text-2xl mt-8 flex lg:flex-col gap-7 lg:h-4/6 vs:w-4/6 vs:h-full vs:mt-0 md:w-4/6 justify-center md:h-full sm:w-4/6 items-center md:flex-row md:mt-0 sm:mt-0 sm:flex-row">
        <Link to="/">
          {" "}
          <i className="fa-solid fa-layer-group cursor-pointer recommended"></i>
        </Link>
        <Link to="/movies">
          {" "}
          <i className="fa-solid fa-film cursor-pointer movie"></i>
        </Link>
        <Link to="/tv-series">
          {" "}
          <i className="fa-solid fa-tv cursor-pointer series"></i>
        </Link>
        <Link to="/bookmarks">
          {" "}
          <i className="fa-solid fa-bookmark cursor-pointer bookmark"></i>
        </Link>
      </div>
      <div className="w-14 ">
        <img
          src={icon}
          alt="avatar"
          className="rounded-full lg:w-14 md:w-12 sm:w-11 vs:w-9 transition-all duration-150 avatar"
        />
      </div>
    </nav>
  );
}

export default Nav;
