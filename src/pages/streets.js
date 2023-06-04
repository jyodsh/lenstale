
import * as React from "react"
import Flickr from "../components/flickr"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Stream = ({ data, location  }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <Flickr />
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