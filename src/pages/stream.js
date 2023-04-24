
import * as React from "react"
import Gallery from "../components/gallery"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"

const Stream = ({ data, location  }) => {
  const siteTitle = data.site.siteMetadata.title
  console.log('QQQqqQQQQQQQQ', location);
  return (
    <Layout location={location} title={siteTitle}>
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