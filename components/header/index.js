import React from 'react'
import { Row, Col } from 'antd'
import SearchBar from './SearchBar'
import NavBar from './NavBar'
import UserInfo from './UserInfo'
import DownList from './DownList'
import '../../static/style/header.css'

const CommonHeader = () => {
  return (
    <Row className="header">
      <Col xs={24} sm={6} md={6} lg={6} xl={4}>
        <Row className="header-left">
          <Col xs={16} sm={24}>
            <h1 className="logo">
              <a href="/">刘木木的博客</a>
            </h1>
          </Col>
          <Col xs={8} sm={0}>
            <DownList />
          </Col>
        </Row>
      </Col>
      <Col xs={0} sm={18} md={18} lg={18} xl={20}>
        <Row className="header-right">
          <Col xs={0} sm={0} md={0} lg={6} xl={8}>
            <SearchBar />
          </Col>
          <Col xs={0} sm={19} md={18} lg={13} xl={12}>
            <NavBar />
          </Col>
          <Col xs={0} sm={5} md={6} lg={5} xl={4}>
            <UserInfo />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CommonHeader