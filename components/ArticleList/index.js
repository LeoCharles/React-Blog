import React from 'react'
import { Row, Col,  Divider, Drawer, Tag, Icon } from 'antd'
import '../../static/style/article-list.css'

const ArticleList = () => {
  return (
    <Row className="app-main" >
      <Col xs={23} sm={23} md={23} lg={23} xl={18}>
        <ul className="article-list">
          <li className="article">
            <Divider orientation="left">
              <span className="article-title">javascript 基础系列1 - 原型与原型链</span>
              <span className="post-time">2019-11-10</span>
            </Divider>
            <div className="article-content">
              实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的
              <br />
              <br /> <br /> <br /> <br /><br /> <br /> <br /> <br />VUE-MVVM实现简易的 VUE-MVVM
            </div>
            <div className="article-info">
              <span className="count-box">
                <Icon type="message" />
                <span className="count">5</span>
                <Icon type="eye" />
                <span className="count">10</span>
              </span>
              <span>
                <Icon type="tags" />
                <Tag>javascript</Tag>
              </span>
            </div>
          </li>
          <li className="article">
            <Divider orientation="left">
              <span className="article-title">javascript 基础系列1 - 原型与原型链</span>
              <span className="post-time">2019-11-10</span>
            </Divider>
            <div className="article-content">
              实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的
              <br />
              <br /> <br /> <br /> <br /><br /> <br /> <br /> <br />VUE-MVVM实现简易的 VUE-MVVM
            </div>
            <div className="article-info">
              <span className="count-box">
                <Icon type="message" />
                <span className="count">5</span>
                <Icon type="eye" />
                <span className="count">10</span>
              </span>
              <span>
                <Icon type="tags" />
                <Tag>javascript</Tag>
              </span>
            </div>
          </li>
        </ul>
      </Col>
      <Col xs={0} sm={0} md={0} lg={0} xl={6}>
        <Divider >文章列表</Divider>
        <ul className="preview-list">
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
      </Col>
      <Col xs={1} sm={1} md={1} lg={1} xl={0}>
        <div className="drawer-btn">
          <Icon type='menu-o' />
        </div>
        <Drawer>
          <ul className="preview-list">
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
        </Drawer>
      </Col>
    </Row>

  )
}

export default ArticleList
