import React, { useState } from 'react'
import { Dropdown, Menu, Icon, Input } from 'antd'

const DownList = () => {
  const [keyword, setKeyword] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setKeyword(e.target.value)
  }

  const handleSubmit = () => {
    console.log(keyword)
    setKeyword('')
  }

  const menu = (
    <Menu className="nav-bar" mode="vertical">
      <Menu.Item key="home">
        <Icon type="home" />首页
      </Menu.Item>
      <Menu.Item key="project">
        <Icon type="appstore" />项目
      </Menu.Item>
      <Menu.Item key="about">
        <Icon type="user" />关于
      </Menu.Item>
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

export default DownList