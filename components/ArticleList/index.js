import React from 'react'
import { Divider, Tag, Icon } from 'antd'

const ArticleList = () => {
  return (
    <ul className="article-list">
      <li className="article">
        <Divider orientation="left">
          <span className="article-title">javascript 基础系列1 - 原型与原型链</span>
          <span className="post-time">2019-11-10</span>
        </Divider>
        <div className="article-content">实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM实现简易的 VUE-MVVM</div>
        <div className="article-info">
          <Icon type="message" />
          <span className="comment-count">5</span>
          <Icon type="eye" />
          <span className="view-count">10</span>
          <Tag>javascript</Tag>
        </div>
      </li>
    </ul>
  )
}

export default ArticleList
