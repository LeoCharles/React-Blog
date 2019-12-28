import React from 'react'
import Head from 'next/head'
import Header from '../Header'

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>刘沐沐的博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      { children }
    </>
  )
}

export default Layout
