import React from 'react'
import { Comment, Avatar, Form, Input, Button, Icon } from 'antd'

const { TextArea } = Input

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <Form className="comment-form">
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} placeholder="说点什么..."/>
    </Form.Item>
    <Form.Item className="submit-item">
      <span className="tips">
        <Icon type="file-markdown" />支持 Markdown 语法
      </span>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        发表评论
      </Button>
    </Form.Item>
  </Form>
);

const CommentEditor = () => {
  return (
    <Comment
      className="conment-editor"
      avatar={
        <Avatar icon="user" />
      }
      content={
        <Editor />
      }/>
  )
}

export default CommentEditor