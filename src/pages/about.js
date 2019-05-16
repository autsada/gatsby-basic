import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>Title</h1>
      <p>
        Bio <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
