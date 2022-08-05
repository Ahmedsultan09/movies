import React from "react";
import { data } from "../data";
import RegularCard from "../Layout/RegularCard";
import "./RecommendedCard.css";
import Left from "../Layout/Left";
import Nav from "./Nav";
import Right from "../Layout/Right";
import Search from "./Search";
import Trending from "./Trending";
import { useState } from "react";
import SearchCard from "../Layout/SearchCard";
function RecommendedCard() {
  // Declaring Variables
  let renderShows;
  let filteredShows;
  let searchRender;
  // Handling SearchBar //
  let [searchText, setSearchText] = useState("");
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  // Filter Recommended shows from data //
  let recommendedData = data.filter((e) => {
    return e.thumbnail.regular;
  });
  // Checking Searchbar if its empty or not //
  // if it's empty render all movies //
  if (searchText === "") {
    renderShows = recommendedData.map((e) => {
      return <RegularCard data={e} key={e.title} />;
    });
  } else {
    filteredShows = recommendedData.filter((e) => {
      return e.title
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    searchRender = filteredShows.map((e) => {
      return <SearchCard data={e} key={e.title} />;
    });
  }

  // Render recommended data

  return (
    <>
      <Left>
        <Nav active="recommended" />
      </Left>
      <Right>
        <Search
          handleChange={handleChange}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <Trending />
        <h1 className="text-white lg:text-4xl md:text-3xl sm:text-2xl vs:text-2xl mt-8">
          Recommended For You
        </h1>
        <div className=" w-full mt-8 relative text-white wrapper ">
          {renderShows}
        </div>
        <div className="search-card-wrapper text-white">{searchRender}</div>
      </Right>
    </>
  );
}

export default RecommendedCard;
