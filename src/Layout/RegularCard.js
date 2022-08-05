import { useState } from "react";
import "../Components/TrendingCard.css";
function RegularCard(props) {
  let [isBookMarked, setIsBookMarked] = useState(props.data.isBookmarked);
  let bookmark;
  if (isBookMarked) {
    bookmark = (
      <div className="bookmark-icon" onClick={handleClick}>
        <i className="fa-solid fa-bookmark active-bookmark"></i>
      </div>
    );
  } else {
    bookmark = (
      <div className="bookmark-icon" onClick={handleClick}>
        <i className="fa-solid fa-bookmark "></i>
      </div>
    );
  }

  function handleClick(e) {
    setIsBookMarked(!isBookMarked);
    props.data.isBookmarked = !props.data.isBookmarked;
  }
  return (
    <div
      className="recommended-card h-full relative"
      key={props.data.title}
      data-aos="fade-in"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
    >
      <img
        src={`${props.data.thumbnail.regular.large}`}
        alt={props.data.title}
        className="t-image rounded-xl"
      />
      {bookmark}
      <div className="play-btn">
        <i className="fa-solid fa-play"></i>
        <p>PLAY</p>
      </div>
      <div className="flex flex-col w-full h-6">
        <div className=" flex flex-row gap-2">
          <span>{props.data.year}</span>
          <span>.</span>
          <span>{props.data.category}</span>
          <span>.</span>

          <span>{props.data.rating}</span>
        </div>
        <h1 className="m-0 text-xl font-bold">{props.data.title}</h1>
      </div>
    </div>
  );
}

export default RegularCard;
