import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import blogStyles from './styles/blog.module.scss'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <ol className={blogStyles.posts}>
      {data.allContentfulBlogPost.edges.map(post => {
        const { title, publishedDate, slug } = post.node
        return (
          <li key={title} className={blogStyles.post}>
            <Link to={`/blog/${slug}`}>
              <h2>{title}</h2>
              <p>{publishedDate}</p>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default Blog
