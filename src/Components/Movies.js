import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import Search from "./Search";
import "./Movies.css";
import Right from "../Layout/Right";
import Left from "../Layout/Left";
import { data } from "../data";
import RegularCard from "../Layout/RegularCard";
import SearchCard from "../Layout/SearchCard";
function Movies() {
  // Handling SearchBar //
  let [searchText, setSearchText] = useState("");
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  // Declaring Variables //
  let renderMovies;
  let searchRender;
  let filteredMovies;
  // Filter Movies from Data //
  let movies = data.filter((e) => {
    return e.category === "Movie";
  });
  // Checking Searchbar if its empty or not //
  // if it's empty render all movies //
  if (searchText === "") {
    renderMovies = movies.map((e) => {
      return <RegularCard data={e} key={e.title} />;
    });
    // if it's not empty render the matching mvoie names //
  } else {
    // Filtering the movies depending on the searchbar Text //
    filteredMovies = movies.filter((e) => {
      return e.title
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    // Rendering the filtered movies //
    searchRender = filteredMovies.map((e) => {
      return <SearchCard data={e} key={e.title} />;
    });
  }
  return (
    <div className="main lg:flex lg:flex-row md:flex-col sm:flex-col">
      <Left>
        <Nav active="movie" />
      </Left>
      <Right>
        <Search
          handleChange={handleChange}
          searchText={searchText}
          setSearchText={setSearchText}
        />

        <div className="wrapper text-white">{renderMovies}</div>
        <div className="search-card-wrapper text-white">{searchRender}</div>
      </Right>
    </div>
  );
}

export default Movies;
