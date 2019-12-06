import React from 'react'
import { Icon } from 'antd'
import SvgIcon from '../SvgIcon/index'

const Author = () => {
  return (
    <div className="user-card">
      <img className="avatar" src="../../static/img/avatar.jpg" />
      <h2 className="title">刘木木</h2>
      <p className="sub-title">前端打杂人员，略微代码洁癖</p>
      <p className="links">
        <Icon type='github' className='link-icon' />
        <span>Github</span>
      </p>
      <p className="links">
        <Icon type="mail" className='link-icon' />
        <span>leofe200@gmail.com</span>
      </p>
    </div>
  )
}

export default Author