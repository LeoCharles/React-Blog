import React from 'react'
import { Menu, Icon } from 'antd'

const NavBar = () => {
  return (
    <Menu className="nav-bar" mode="horizontal">
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
  )
}

export default NavBar
