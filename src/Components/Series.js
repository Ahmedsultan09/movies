import React from "react";
import Nav from "./Nav";
import Search from "./Search";
import "../App";
import Right from "../Layout/Right";
import Left from "../Layout/Left";
import { data } from "../data";
import { useState } from "react";
import RegularCard from "../Layout/RegularCard";
import SearchCard from "../Layout/SearchCard";
function Series() {
  // Filtering serieses from data //
  let series = data.filter((e) => {
    return e.category === "TV Series";
  });
  // Declaring Variables
  let renderSeries;
  let filteredSeries;
  let searchRender;
  // Handling SearchBar //
  let [searchText, setSearchText] = useState("");
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  // Checking Searchbar if its empty or not //
  // if it's empty render all serieses //
  if (searchText === "") {
    renderSeries = series.map((e) => {
      return <RegularCard data={e} key={e.title} />;
    });
    // if it's not empty render the matching series names //
  } else {
    // Filtering the movies depending on the searchbar Text //
    filteredSeries = series.filter((e) => {
      return e.title
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    // Rendering the filtered movies //
    searchRender = filteredSeries.map((e) => {
      return <SearchCard data={e} key={e.title} />;
    });
  }
  //

  return (
    <div className="main lg:flex lg:flex-row md:flex-col sm:flex-col ">
      <Left>
        <Nav active="series" />
      </Left>
      <Right>
        <Search
          handleChange={handleChange}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <div className="wrapper text-white">{renderSeries}</div>
        <div className="search-card-wrapper text-white">{searchRender}</div>
      </Right>
    </div>
  );
}

export default Series;
