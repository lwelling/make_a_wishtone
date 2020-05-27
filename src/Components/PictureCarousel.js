import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import pictureOne from "./assets/whisper.png";
import pictureTwo from "./assets/hug.jpg";
import pictureThree from "./assets/laugh.jpg";

export default function PictureCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block" src={pictureOne} alt="Whisper" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={pictureTwo} alt="Hug" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={pictureThree} alt="Laugh" />
      </Carousel.Item>
    </Carousel>
  );
}
