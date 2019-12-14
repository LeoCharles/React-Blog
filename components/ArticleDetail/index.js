import React, { useState } from 'react'
import { Row, Col, Drawer, Tag, Icon } from 'antd'
import AnchorNav from './AnchorNav'
import ArticleComment from '../Comment/index'
import { renderMarkdownToHtml } from '../../utils'
import 'highlight.js/styles/atom-one-dark.css'
import '../../static/style/article-detail.css'

const ArticleDetail = () => {

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

  const [article, setArticle] = useState({
    id: '1',
    title: 'javascript 基础系列1 - 原型与原型链',
    content: markdown,
    createdAt: '2019-1-23',
    commentCount: 4,
    viewCount: 5,
    tag: 'javascript'
  })

  const [drawerVisible, showDrawerVisible ] = useState(false)

  const { title, createdAt, commentCount, viewCount, tag } = article;
  // markdown 转成 html
  const htmlContent = renderMarkdownToHtml(article.content)

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
        </div>
        <ArticleComment />
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
          onClose={() => showDrawerVisible(false)}>
          <AnchorNav content={htmlContent}/>
        </Drawer>
      </Col>
    </Row>
  )
}

export default ArticleDetail