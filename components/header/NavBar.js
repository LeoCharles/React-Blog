import React from 'react'
import Router, { withRouter } from 'next/router'
import { Menu, Icon } from 'antd'

const NavBar = ({router}) => {

  const navList = [
    {name: '首页', icon: 'home', key: '/index'},
    {name: '项目', icon: 'project', key: '/project'},
    {name: '关于', icon: 'user', key: '/about'},
  ]

  return (
    <Menu
      className="nav-bar"
      mode="horizontal"
      onClick={e => Router.push(e.key)}
      selectedKeys={[router.pathname]}>
      {
        navList.map(item => (
          <Menu.Item key={item.key}>
            <Icon type={item.icon} />{item.name}
          </Menu.Item>
        ))
      }
    </Menu>
  )
}

export default withRouter(NavBar)
