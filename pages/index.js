import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/index'
import Sider from '../components/Sider/index'
import ArticleList from '../components/ArticleList/index'
import { Row, Col } from 'antd'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Row className="app-wrapper">
      <Col xs={0} sm={0} md={6} lg={6} xl={4}>
        <Sider />
      </Col>
      <Col xs={24} sm={24} md={18} lg={18} xl={20}>
        <ArticleList />
      </Col>
    </Row>
  </>
)

export default Home
