import React from 'react'
import { Comment, Avatar, Form, Input, Button, Icon } from 'antd'

const { TextArea } = Input

// 评论输入框
const CommentEditor = ({ value, loading, articleId, onChange, onSubmit }) => {
  return (
    <Comment
      className="conment-editor"
      avatar={
        <Avatar icon="user" />
      }
      content={
        <Form className="comment-form">
          <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} placeholder="说点什么..."/>
          </Form.Item>
          <Form.Item className="submit-item">
            <span className="tips">
              <Icon type="file-markdown" />支持 Markdown 语法
            </span>
            <Button htmlType="submit" loading={loading} onClick={onSubmit} type="primary">
              {articleId ? '发表评论' : '留言'}
            </Button>
          </Form.Item>
        </Form>
      }/>
  )
}

export default CommentEditor