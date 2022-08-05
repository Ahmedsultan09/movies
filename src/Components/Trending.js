import React from "react";
import TrendingCard from "./TrendingCard";

function Trending() {
  return (
    <div className="lg:block sm:hidden md:hidden vs:hidden">
      <h1 className="text-white text-4xl mt-8">Trending</h1>
      <TrendingCard />
    </div>
  );
}

export default Trending;
