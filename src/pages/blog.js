import React from 'react'

import Blog from '../components/Blog'
import Layout from '../components/Layout'
import Head from '../components/Head'

const BlogPage = () => {
  return (
    <Layout>
      <Head title="Blog" />
      <Blog />
    </Layout>
  )
}

export default BlogPage
