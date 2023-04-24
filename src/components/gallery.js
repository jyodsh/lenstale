import * as React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import "../css/gallery.css"

const Gallery = () => {
  const images = useGallery()
  if (images.length < 1) {
    return null;
  }
  const columnsCountBreakPoints = { 350: 1, 750: 2 };
  return (
    <div className="gallery" >
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry columnsCount={2} gutter="2em">
          {images.map(({ id, fluid }) => (
            <Img key={id} fluid={fluid} />
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
            fluid {
              ...GatsbyImageSharpFluid
            }
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
