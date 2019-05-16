import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './styles/footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div>
      <footer className={footerStyles.footer}>
        <p>Created by {data.site.siteMetadata.author}, copyright 2019</p>
      </footer>
    </div>
  )
}

export default Footer
