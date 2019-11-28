import React from 'react'
import { Icon, Divider, Tag} from 'antd'
import Author from './Author'
import '../../static/style/sider.css'

const Sider = () => {
  return (
    <div className="sider">
      <Author />
      <Divider orientation="left">热门文章</Divider>
      <ul className="hot-articles">
        <li className="item">
          <a className="text-ellipsis">koa-react-ssr 学习</a>
        </li>
        <li className="item">
          <a className="text-ellipsis">typescript 入门</a>
        </li>
        <li className="item">
          <a className="text-ellipsis">实现简易的 VUE-MVVM</a>
        </li>
        <li className="item text-ellipsis">
          <a className="text-ellipsis">实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM</a>
        </li>
        <li className="item">
          <a className="text-ellipsis">如何用 es6+ 写出优雅的 js 代码</a>
        </li>
        <li className="item">
          <a className="text-ellipsis">实现简易的 VUE-MVVM</a>
        </li>
        <li className="item">
          <a className="text-ellipsis">实现简易的 VUE-MVVM</a>
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