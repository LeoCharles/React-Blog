import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Row, Col,  Divider, Drawer, Tag, Icon } from 'antd'
import PreviewList from './PreviewList'
import '../../static/style/article-list.css'

const ArticleList = () => {
  const [articleList, setArticleList] = useState([
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
    }
  ])
  const [drawerVisible, showDrawerVisible ] = useState(false)

  // 判断是否为大屏幕
  const isLargeScreen = useMediaQuery({
    query: '(min-width: 1200px)'
  })

  return (
    <Row className="app-main" >
      <Col xs={24} sm={24} md={24} lg={24} xl={18}>
        <ul className="article-list">
          {articleList.map(item => (
            <li className="article" key={item.id}>
              <Divider orientation="left">
                <span className="article-title">{item.title}</span>
              </Divider>
              <div className="article-content">{item.content}</div>
              <div className="article-desc">
                <span>
                  <Icon type="message" />
                  <span className="count">{item.commentCount}</span>
                  <Icon type="eye" />
                  <span className="count">{item.viewCount}</span>
                  <Icon type="tags" />
                  <Tag>{item.tag}</Tag>
                </span>
                <span>
                  <span>{item.createdAt}</span>
                </span>
              </div>
            </li>
          ))}

        </ul>
      </Col>
      <Col xs={0} sm={0} md={0} lg={0} xl={6} >
        <PreviewList list={articleList} title="文章列表" />
      </Col>
      { !isLargeScreen && (
        <>
          <div
            className="drawer-btn"
            onClick={() => showDrawerVisible(true)}>
            <Icon type='menu-o' />
          </div>
          <Drawer
            visible={drawerVisible}
            onClose={() => showDrawerVisible(false)}
            title="文章列表">
            <PreviewList list={articleList} />
          </Drawer>
        </>
      )}
    </Row>
  )
}

export default ArticleList
