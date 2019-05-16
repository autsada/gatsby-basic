import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/Layout'
import Head from '../components/Head'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const alt = ''
        const url = ''
        return <img src={url} alt={alt} />
      },
    },
  }
  const { title, publishedDate, body } = props.data.contentfulBlogPost
  return (
    <Layout>
      <Head title={title} />
      <h2>{title}</h2>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default Blog
