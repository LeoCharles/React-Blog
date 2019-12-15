import React from 'react'
import Link from 'next/link'
import { Icon, Divider, Tag} from 'antd'
import Author from './Author'
import '../../static/style/sider.css'

const Sider = () => {

  const hotArticle = [
    {
      id: '1',
      title: 'javascript 基础系列1 - 原型与原型链',
      content: '实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的',
      createdAt: '2019-1-23',
      commentCount: 4,
      viewCount: 5,
      tag: 'javascript'
    },
    {
      id: '2',
      title: 'javascript 基础系列2 - 原型与原型链',
      content: '实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的',
      createdAt: '2019-1-24',
      commentCount: 2,
      viewCount: 5,
      tag: 'javascript'
    },
    {
      id: '3',
      title: 'javascript 基础系列3 - 原型与原型链',
      content: '实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的',
      createdAt: '2019-1-25',
      commentCount: 1,
      viewCount: 5,
      tag: 'javascript'
    },
    {
      id: '4',
      title: 'javascript 基础系列3 - 原型与原型链',
      content: '实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的',
      createdAt: '2019-1-25',
      commentCount: 1,
      viewCount: 5,
      tag: 'javascript'
    },
    {
      id: '5',
      title: 'javascript 基础系列3 - 原型与原型链',
      content: '实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的',
      createdAt: '2019-1-25',
      commentCount: 1,
      viewCount: 5,
      tag: 'javascript'
    }
  ]

  return (
    <div className="sider">
      <Author />
      <Divider orientation="left">热门文章</Divider>
      <ul className="hot-articles">
        {
          hotArticle.map(item => (
            <li className="item" key={item.id}>
              <Link href={{pathname: '/article', query: {id: item.id}}}>
                <a className="text-ellipsis">{item.title}</a>
              </Link>
            </li>

          ))
        }
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