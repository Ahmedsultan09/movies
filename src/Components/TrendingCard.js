import "./TrendingCard.css";
import { data } from "../data";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TrendingCard() {
  let trendingData = data.filter((e) => e.isTrending);

  return (
    <div>
      <div className="trending-card w-full h-60 mt-8 relative text-white">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {trendingData.map((e) => (
            <SwiperSlide
              className="recommended-card w-1/3 h-full relative m-3"
              key={e.title}
            >
              <img
                src={`${e.thumbnail.trending.large}`}
                alt={e.title}
                className="t-image rounded-xl"
              />
              <div className="play-btn">
                <i className="fa-solid fa-play"></i>
                <p>PLAY</p>
              </div>
              <div className="details flex flex-row gap-2">
                <span>{e.year}</span>
                <span>.</span>
                <span>{e.category}</span>
                <span>.</span>

                <span>{e.rating}</span>
              </div>
              <h1 className="movie-name">{e.title}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TrendingCard;
