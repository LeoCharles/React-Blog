import React, { useState } from 'react'
import { Row, Col, Drawer, Tag, Icon } from 'antd'
import ArticleComment from '../Comment/index'
import '../../static/style/article-detail.css'

const ArticleDetail = () => {

  const [article, setArticle] = useState({
    id: '1',
    title: 'javascript 基础系列1 - 原型与原型链',
    content: '本次封装基于 antd 风格, 实现高度可配置的表格封装配置。',
    createdAt: '2019-1-23',
    commentCount: 4,
    viewCount: 5,
    tag: 'javascript'
  })

  const { title, content, createdAt, commentCount, viewCount, tag } = article;

  return (
    <Row className="app-main">
      <Col xs={23} sm={23} md={23} lg={23} xl={18}>
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
          <div className="article-content markdown" dangerouslySetInnerHTML={{__html: content}} />
        </div>
        <ArticleComment />
      </Col>
    </Row>
  )
}

export default ArticleDetail