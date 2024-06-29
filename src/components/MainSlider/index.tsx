import { Carousel } from "flowbite-react";
import * as React from "react";

function MainSlider(): JSX.Element {
  return (
    <div className="relative pt-[79px]">
      <div className="h-[245px] lg:h-[480px] block">
        <Carousel
          className=""
          slideInterval={2000}
          indicators={false}
          leftControl=" "
          rightControl=" "
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/525/156/non_2x/online-casino-banner-with-smartphone-shine-neon-casino-roulette-wheel-playing-cards-blue-neon-shine-slot-machine-and-poker-chips-in-dark-scene-with-hologram-of-digital-rings-vector.jpg"
            alt="..."
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/332/122/original/pink-shine-neon-casino-roulette-wheel-with-playing-cards-vector.jpg"
            alt="..."
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/010/338/non_2x/neon-casino-playing-cards-with-poker-chips-in-hologram-of-digital-rings-in-dark-empty-scene-vector.jpg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}

export default MainSlider;
