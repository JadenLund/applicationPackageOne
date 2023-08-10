import Card from "./Card";
import { productCarouselData } from "./Information";
import { useState, useEffect } from "react";
import Marquee from "./Marquee";
export default function Collection() {
  const [currentCard, setCurrentCard] = useState(0);

  function prevSlide() {
    setCurrentCard((currentCard) =>
      currentCard === 0 ? productCarouselData.length - 1 : currentCard - 1
    );
    console.log(currentCard);
  }

  function nextSlide() {
    setCurrentCard((currentCard) =>
      currentCard === productCarouselData.length - 1 ? 0 : currentCard + 1
    );
  }

  return (
    <div>
      <h1 className="my-5 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fadein to-fadeout">
        Some of the Best
      </h1>
      <div className="w-r h-i rounded-3xl overflow-hidden relative bg-gradient-to-r from-fadein to-fadeout text-white">
        <div
          className="flex transition-transform ease-out duration-700"
          style={{ transform: `translateX(-${currentCard * 70}rem)` }}
        >
          {productCarouselData.map((info, index) => (
            <div className="w-a">
              <Card
                key={`${info.title}_${index}`}
                product={{
                  title: info.title,
                  image: info.image,
                  description: info.description,
                }}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          {[
            [prevSlide, "left"],
            [nextSlide, "right"],
          ].map(([direc, arrow]) => (
            <button
              onClick={direc}
              className="p-1 px-2 rounded-2xl bg-white bg-opacity-0 text-white transition duration-300 hover:bg-opacity-20"
            >
              <i className={`fa-solid fa-chevron-${arrow} fa-2x`} />
            </button>
          ))}
        </div>

        <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2">
          {productCarouselData.map((_, i) => (
            <div
              className={`transition duration-300 w-3 h-3 bg-white rounded-full
              ${currentCard === i ? "" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
      <div className="my-5">
        <Marquee />
      </div>
    </div>
  );
}
