import React from 'react'
import Head from 'next/head'
import Header from '../components/Header/index'
import Sider from '../components/Sider/index'
import { Row, Col } from 'antd'

const Home = () => (
  <>
    <Head>
      <title>刘沐沐的博客</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Row className="app-wrapper">
      <Col xs={0} sm={0} md={6} lg={6} xl={5}>
        <Sider />
      </Col>
      <Col xs={24} sm={24} md={18} lg={18} xl={19}>
        关于
      </Col>
    </Row>
  </>
)

export default Home
