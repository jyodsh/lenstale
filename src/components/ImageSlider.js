import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../css/ImageSlider.css";

const SLIDE_INTERVAL = 3000;

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 5);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <StaticImage
        src="../images/slider/slide1.jpg"
        alt=""
        className={`slider-image${current === 0 ? " active" : ""}`}
        objectFit="cover"
        objectPosition="center"
      />
      <StaticImage
        src="../images/slider/slide2.jpg"
        alt=""
        className={`slider-image${current === 1 ? " active" : ""}`}
        objectFit="cover"
        objectPosition="center"
      />
      <StaticImage
        src="../images/slider/slide3.jpg"
        alt=""
        className={`slider-image${current === 2 ? " active" : ""}`}
        objectFit="cover"
        objectPosition="center"
      />
      <StaticImage
        src="../images/slider/slide4.jpg"
        alt=""
        className={`slider-image${current === 3 ? " active" : ""}`}
        objectFit="cover"
        objectPosition="center"
      />
      <StaticImage
        src="../images/slider/slide5.jpg"
        alt=""
        className={`slider-image${current === 4 ? " active" : ""}`}
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default ImageSlider;