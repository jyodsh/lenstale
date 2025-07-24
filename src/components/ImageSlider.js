import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../css/ImageSlider.css";

const SLIDE_INTERVAL = 3000;

const ImageSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "slider" } }
        sort: { name: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const images = data.allFile.nodes.map(node => getImage(node.childImageSharp));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="slider-container">
      <GatsbyImage
        image={images[current]}
        alt=""
        className="slider-image active"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};

export default ImageSlider;