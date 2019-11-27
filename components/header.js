import React from 'react'
import { Layout, Row, Col, Menu, Icon, Button, Input } from 'antd'
import '../static/style/components/header.css'

const Header = Layout.Header

const CommonHeader = () => {
  return (
    <Header className="header">
      <Row>
        <Col className="header-left" xs={24} sm={24} md={8} lg={6} xl={4}>
          <span className="header-logo">刘木木的博客</span>
        </Col>
        <Col className="header-right" xs={0} sm={0} md={16} lg={18} xl={20}>
          <div className="header-search">
            <Icon type="search" className="search-icon"/>
            <Input type="text" value={""} className="search-input" placeholder='搜索文章'/>
          </div>
          <Menu className="header-nav" mode="horizontal">
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
          <div className="header-userinfo">
            <Button>登录</Button>
            <Button>注册</Button>
          </div>
        </Col>
      </Row>
    </Header>
  )
}

export default CommonHeader