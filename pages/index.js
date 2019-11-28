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
        <Row className="app-main" >
          <Col xs={24} sm={24} md={24} lg={24} xl={18}>
            <ArticleList />
          </Col>
          <Col xs={0} sm={0} md={0} lg={0} xl={6}>
            <ul className="preview-list">
              <li className="item">
                <a className="text-ellipsis">koa-react-ssr 学习</a>
              </li>
              <li className="item">
                <a className="text-ellipsis">typescript 入门</a>
              </li>
              <li className="item">
                <a className="text-ellipsis">实现简易的 VUE-MVVM</a>
              </li>
              <li className="item text-ellipsis">
                <a className="text-ellipsis">实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM</a>
              </li>
              <li className="item">
                <a className="text-ellipsis">如何用 es6+ 写出优雅的 js 代码</a>
              </li>
              <li className="item">
                <a className="text-ellipsis">实现简易的 VUE-MVVM</a>
              </li>
              <li className="item">
                <a className="text-ellipsis">实现简易的 VUE-MVVM</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  </>
)

export default Home
