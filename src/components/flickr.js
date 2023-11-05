import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import "../css/gallery.css"

const Flickr = () => {
  const images = useFlickrImages()
  if (images.length < 1) {
    return null;
  }
  const staticImage = images.map((image) => {
    return(<img src={image.url} alt={image.title} id={image.id} />);
  });

  const columnsCountBreakPoints = { 350: 1, 750: 2 };
  return (
    <div className="gallery" >
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry columnsCount={2} gutter="1em">
          {staticImage}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default Flickr;

const useFlickrImages = () => {
  const data = useStaticQuery(graphql`
    query {
      allFlickrPhoto(limit: 50) {
        edges {
          node {
            id
            title
            description
            url_l
          }
        }
      }
    }
  `);
  return data.allFlickrPhoto.edges.map(node => ({
    id: node.node.id,
    title: node.node.title,
    url: node.node.url_l,
  }));
};

