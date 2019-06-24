import React from 'react'
import Head from 'next/head'

const PageTitle = ({ name }) => (
  <Head>
    <title>Sage &#10095; {name}</title>
  </Head>
)

export default PageTitle
