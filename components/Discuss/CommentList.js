import React from 'react'
import { Comment, List, Avatar, Form, Input, Button, Tooltip } from 'antd'

const { TextArea } = Input

const  CommentItem = () => {
  return (
    <Comment
      actions={[<span>回复</span>]}
      author={<span>小明</span>}
      avatar={<Avatar />}
      datetime={
        <Tooltip title={'2019-11-12 12:11:02'}>
          <span>一天前</span>
        </Tooltip>
      }
      content={
        <div>测试测试</div>
      }>
      <Form className="replay-form">
        <Form.Item>
          <TextArea
            placeholder={'回复小明...'}
          />
        </Form.Item>
        <Form.Item className="submit-item">
          <span className="tips">Ctrl or ⌘ + Enter</span>
          <Button size="small">回复</Button>
        </Form.Item>
      </Form>
    </Comment>
  )
}

const  CommentList = () => {

  const comments = [
    {
      id: 1,
      content: '测试评论'
    },
    {
      id: 2,
      content: '测试评论2'
    }
  ]

  return (
    <List
      className="comment-list"
      dataSource={comments}
      renderItem={item => (
        <li>
          <CommentItem />
        </li>
      )}>
    </List>
  )
}


export default CommentList