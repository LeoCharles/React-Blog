import React from 'react'
import { Layout, Row, Col, Menu, Icon } from 'antd'
import '../static/style/components/header.css'

// const Header = Layout.Header

const CommonHeader = () => {
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className="header-logo">刘木木的博客</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Icon type="home" />首页
            </Menu.Item>
            <Menu.Item key="project">
              <Icon type="appstore" />项目
            </Menu.Item>
            <Menu.Item key="about">
              <Icon type="user" />关于
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default CommonHeader