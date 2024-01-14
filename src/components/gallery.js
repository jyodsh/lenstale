import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import "../css/gallery.css"

const Gallery = () => {
  const images = useGallery();
  console.log('images', images);
  if (images.length < 1) {
    return null;
  }
  const columnsCountBreakPoints = { 350: 1, 750: 1 };
  return (
    <div className="gallery" >
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry columnsCount={1} gutter="2em">
          {images.map(( img ) => (
            <GatsbyImage id={img.id}  image={img.gatsbyImageData} alt='' />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default Gallery;

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "gallery" } }
      ) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              )
          }
        }
      }
    }
  `);
  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp, // Note that we're spreading the childImageSharp object here
    id: node.id,
  }));
};
