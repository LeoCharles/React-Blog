import React, { useState } from 'react'
import Router, { withRouter } from 'next/router'
import { Dropdown, Menu, Icon, Input } from 'antd'

const DownList = () => {
  const [keyword, setKeyword] = useState('')

  const navList = [
    {name: '首页', icon: 'home', key: '/index'},
    {name: '项目', icon: 'project', key: '/project'},
    {name: '关于', icon: 'user', key: '/about'},
  ]

  const handleChange = (e) => {
    e.preventDefault()
    setKeyword(e.target.value)
  }

  const handleSubmit = () => {
    console.log(keyword)
    setKeyword('')
  }

  const menu = (
    <Menu
      className="nav-bar"
      mode="vertical"
      onClick={e => Router.push(e.key)}>
      {
        navList.map(item => (
          <Menu.Item key={item.key}>
            <Icon type={item.icon} />{item.name}
          </Menu.Item>
        ))
      }
      <Menu.Item key="search">
        <Icon type="search" className="search-icon"/>
        <Input
          value={keyword}
          onChange={handleChange}
          onBlur={handleSubmit}
          onPressEnter={handleSubmit}
          onClick={(e) => e.stopPropagation() }
          className="search-input"
          placeholder='搜索文章'/>
      </Menu.Item>
    </Menu>
  )

  return (
    <Dropdown
      overlayClassName="dropdown"
      trigger={['click']}
      getPopupContainer={() => document.querySelector('.header-left')}
      overlay={menu}>
      <Icon type="menu-o" />
    </Dropdown>
  )
}

export default withRouter(DownList)