
import * as React from "react"
import Gallery from "../components/gallery"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Stream = ({ data, location  }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <h3>STREAM </h3> 
      <p>Selected images from around the world</p>
      <Gallery />
    </Layout>
  )
}

export default Stream;


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`