import React, { useState } from 'react'
import { withRouter } from 'next/router'
import { Row, Col, Drawer, Divider, Tag, Icon } from 'antd'
import AnchorNav from './AnchorNav'
import Discuss from '../Discuss/index'
import { renderMarkdownToHtml } from '../../utils'
import 'highlight.js/styles/atom-one-dark.css'
import '../../static/style/article-detail.less'

const ArticleDetail = ({router}) => {

  const markdown='## P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '## p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '### p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#### p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '### p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '## p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '## p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'

  const commentList = [
    {id: 12, content: '测试测试评论', createdAt: '2019-12-10 13:23:11', user: {id: 221, username: '小张'}, replices: [
      {createdAt: "2019-09-20 17:16:56", id: 3,userId: 34113677,content: "谢谢",user: {id: 34113677, username: "gershonv"}}
    ]},
    {id: 13, content: 'aaaa', createdAt: '2019-12-11 03:02:22', user: {id: 123, username: 'leo'}, replices: [
      {createdAt: "2019-09-21 15:17:23", id: 4,userId: 12313, content: "感谢",user: {id: 34113677, username: "gershonv"}}
    ]},
  ]

  const [article, setArticle] = useState({
    id: '1',
    title: 'javascript 基础系列1 - 原型与原型链',
    content: markdown,
    createdAt: '2019-1-23',
    commentCount: 4,
    viewCount: 5,
    tag: 'javascript',
    comments: commentList
  })

  const [drawerVisible, showDrawerVisible ] = useState(false)

  const { title, createdAt, commentCount, viewCount, tag, comments } = article;
  // markdown 转成 html
  const htmlContent = renderMarkdownToHtml(article.content)

  const id = router.query.id

  return (
    <Row className="app-main">
      <Col xs={24} sm={24} md={24} lg={24} xl={18}>
        <div className="article-detail">
          <div className="article-header">
            <h1 className="article-title">{title}</h1>
            <div className="article-desc">
              <Icon type="upload" />
              <span className="text">{createdAt}</span>
              <Icon type="message" />
              <span className="text">{commentCount}</span>
              <Icon type="eye" />
              <span className="text">{viewCount}</span>
              <Icon type="tags" />
              <Tag className="tag">{tag}</Tag>
            </div>
          </div>
          <div className="article-content markdown" dangerouslySetInnerHTML={{__html: htmlContent}} />

          <Discuss articleId={id} comments={comments}/>
        </div>
      </Col>
      <Col xs={0} sm={0} md={0} lg={0} xl={6}>
        <AnchorNav content={htmlContent} />
      </Col>
      <Col xs={1} sm={1} md={1} lg={1} xl={0}>
        <div
          className="drawer-btn"
          onClick={() => showDrawerVisible(true)}>
          <Icon type='menu-o' />
        </div>
        <Drawer
          visible={drawerVisible}
          onClose={() => showDrawerVisible(false)}
          title={title}>
          <AnchorNav content={htmlContent}/>
        </Drawer>
      </Col>
    </Row>
  )
}

export default withRouter(ArticleDetail)