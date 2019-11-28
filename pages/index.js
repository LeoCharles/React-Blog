import React from 'react'
import Head from 'next/head'
import Header from '../components/header/'
import { Layout } from 'antd'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Header />
    </Layout>
  </>
)

export default Home
