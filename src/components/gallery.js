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
  
  const columnsCountBreakPoints = { 350: 1, 750: 2, 900: 3 }; // Adjusted for better responsiveness

  return (
    <div style={{ padding: "1rem" }}>
      <ResponsiveMasonry 
        columnsCountBreakPoints={columnsCountBreakPoints}
        gutterBreakpoints={{ 350: "12px", 750: "16px", 900: "24px" }}
        gutter={"24px"} // Set a consistent gutter
      >
        {images.map((img, i) => (
          <div key={i} style={{ marginBottom: "24px" }}> {/* Added margin for spacing */}
            <GatsbyImage id={img.id} image={img.gatsbyImageData} alt="" />
          </div>
        ))}
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
    ...node.childImageSharp,
    id: node.id,
  }));
};
