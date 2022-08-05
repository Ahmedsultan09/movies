import "./Search.css";
function Search(props) {
  return (
    <div className="search flex flex-row gap-3 justify-center items-center h-20  lg:w-full cursor-pointer">
      <i className="fa-solid fa-magnifying-glass text-white text-3xl"></i>
      <input
        type="text"
        className="w-full bg-inherit h-full rounded-xl  font-medium lg:text-xl md:text-xl sm:text-sm vs:text-base transition-all text-white duration-300 searchBar"
        placeholder="Search for Movies or TV-Series"
        value={props.searchText}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Search;
