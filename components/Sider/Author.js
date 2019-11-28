import React from 'react'
import { Icon } from 'antd'
import SvgIcon from '../SvgIcon/index'

const Author = () => {
  return (
    <div className="user-card">
      <img className="avatar" src="../../static/img/avatar.jpg" />
      <h2 className="title">刘木木</h2>
      <p className="sub-title">前端打杂人员，略微代码洁癖</p>
      <div className="links">
        <span className="link">
          <Icon type='github' theme='filled' className='link-icon' />Github
        </span>
        <span className="link">
          <SvgIcon type='iconjuejin' className='link-icon' />掘金
        </span>
      </div>
    </div>
  )
}

export default Author