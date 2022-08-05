import Left from "../Layout/Left";
import Nav from "./Nav";
import Right from "../Layout/Right";
import Search from "./Search";
import { data } from "../data";
import { useState } from "react";
import SearchCard from "../Layout/SearchCard";
function Bookmarks() {
  let [searchText, setSearchText] = useState("");
  function handleChange(e) {
    setSearchText(e.target.value);
  }

  // Declaring Variables //
  let renderedBookmarks;
  let filteredBookmarks;
  let searchRender;
  let bookmarks;
  // Filtering bookmarks //
  bookmarks = data.filter((e) => {
    return e.isBookmarked === true;
  });
  // Checking Searchbar if its empty or not //
  // if it's empty render all bookmarks //
  if (searchText === "") {
    renderedBookmarks = bookmarks.map((e) => {
      return <SearchCard data={e} key={e.title} />;
    });
  }
  // if it's not empty render the matching bookmarks names //
  else {
    // Filtering the bookmarks depending on the searchbar Text //
    filteredBookmarks = bookmarks.filter((e) => {
      return e.title
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    // Rendering the filtered bookmarks //
    searchRender = filteredBookmarks.map((e) => {
      return <SearchCard data={e} key={e.title} />;
    });
  }

  return (
    <div className="main lg:flex lg:flex-row md:flex-col sm:flex-col">
      <Left>
        <Nav active="bookmark" />
      </Left>
      <Right>
        <Search
          handleChange={handleChange}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <div className=" w-full mt-8 relative text-white wrapper ">
          {renderedBookmarks}
        </div>
        <div className="wrapper text-white">{searchRender}</div>
      </Right>
    </div>
  );
}

export default Bookmarks;
