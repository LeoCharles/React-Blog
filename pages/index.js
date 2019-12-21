import React from 'react'
import Layout from '../components/Layout/index'
import Sider from '../components/Sider/index'
import ArticleList from '../components/ArticleList/index'
import { Row, Col } from 'antd'

const Home = () => (
  <Layout>
    <Row className="app-wrapper">
      <Col xs={0} sm={0} md={0} lg={6} xl={5}>
        <Sider />
      </Col>
      <Col xs={24} sm={24} md={24} lg={18} xl={19}>
        <ArticleList />
      </Col>
    </Row>
  </Layout>

)

export default Home
