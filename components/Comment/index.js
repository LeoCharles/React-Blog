import React from 'react'
import { Comment, List, Avatar, Form, Input, Button } from 'antd'

const { TextArea } = Input

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} placeholder="说点什么..."/>
    </Form.Item>
    <Form.Item>

      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        发表评论
      </Button>
    </Form.Item>
  </div>
);

const ArticleComment = () => {

  return (
    <div className="article-comment">
      <div className="comment-header">
        <span><span>0</span>条评论</span>
      </div>
      <div>
        <Comment
          avatar={
            <Avatar icon="user" />
          }
          content={
            <Editor />
          }
          />
      </div>
    </div>
  )
}
export default ArticleComment
