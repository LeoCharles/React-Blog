import React from 'react'
import { Icon, Divider, Tag} from 'antd'
import SvgIcon from '../SvgIcon/index'
import '../../static/style/sider.css'

const Sider = () => {
  return (
    <div className="sider">
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
      <Divider orientation="left">热门文章</Divider>
      <ul className="article-list">
        <li className="article-item">
          <a>koa-react-ssr 学习</a>
        </li>
        <li className="article-item">
          <a>typescript 入门</a>
        </li>
        <li className="article-item">
          <a>实现简易的 VUE-MVVM</a>
        </li>
        <li className="article-item">
          <a>实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM</a>
        </li>
        <li className="article-item">
          <a>如何用 es6+ 写出优雅的 js 代码</a>
        </li>
        <li className="article-item">
          <a>实现简易的 VUE-MVVM</a>
        </li>
        <li className="article-item">
          <a>实现简易的 VUE-MVVM</a>
        </li>
      </ul>
      <Divider orientation="left">标签</Divider>
      <div className="tag-list">
        <Tag color={'geekblue'}><a>Vue</a></Tag>
        <Tag color={'lime'}><a>ES6</a></Tag>
        <Tag color={'volcano'}><a>Vue</a></Tag>
        <Tag color={'green'}><a>Koa</a></Tag>
        <Tag color={'cyan'}><a>NodeJs</a></Tag>
        <Tag color={'gold'}><a>React</a></Tag>
        <Tag color={'geekblue'}><a>TypeScript</a></Tag>
        <Tag color={'volcano'}><a>MySql</a></Tag>
        <Tag color={'purple'}><a>NodeJs</a></Tag>
        <Tag color={'geekblue'}><a>Javascript</a></Tag>
        <Tag color={'magenta'}><a>React</a></Tag>
      </div>
    </div>
  )
}

export default  Sider