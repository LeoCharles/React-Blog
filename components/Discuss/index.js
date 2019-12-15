import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import CommentList from './CommentList'
import CommentEditor from './CommentEditor'
import '../../static/style/discuss.css'

const renderDropdownMenu = () => {
  return (
    <Menu>
      <Menu.Item key="login">登录</Menu.Item>
      <Menu.Item key="register">注册</Menu.Item>
    </Menu>
  )
}

const Discuss = () => {

  return (
    <div className="discuss">
      <div className="discuss-header">
        <div>
          <span className="count">0</span>条评论
        </div>
        <div className="user">
          <Dropdown
            trigger={['click', 'hover']}
            overlay={renderDropdownMenu()}>
            <span className="info">未登录用户<Icon type="down" /></span>
          </Dropdown>
        </div>
      </div>
      <CommentEditor />
      <CommentList />
    </div>
  )
}
export default Discuss
