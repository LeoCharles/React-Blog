import React, {useState} from 'react'
import { Comment, Avatar, Form, Input, Button, Tooltip } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime  from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')       // 使用中文
dayjs.extend(relativeTime)  // 相对时间插件

const { TextArea } = Input

const  CommentItem = (props) => {
  const {comment, children, showReplay} = props
  const {content, user, createdAt} = comment

  const [value, setValue] = useState('')
  const [showTextArea, setTextArea] = useState(false)

  const handleReplay = () => {
    setValue('')
    setTextArea(!showTextArea)
  }

  const handleKeyUp = (e) => {
    if (e.ctrKey && e.keyCode === 13) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    console.log(value)
  }

  return (
    <Comment
      actions={showReplay ? [<span onClick={handleReplay}>回复</span>] : []}
      author={<span>{user.username}</span>}
      avatar={<Avatar />}
      datetime={
        <Tooltip title={createdAt}>
          <span>{dayjs(createdAt).fromNow()}</span>
        </Tooltip>
      }
      content={content}>
        {
          showTextArea && (
            <Form>
              <TextArea
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyUp={handleKeyUp}
                placeholder={`回复${user.username}...`}
              />
              <div className="submit-item">
                <span className="tips">Ctrl or ⌘ + Enter</span>
                <Button
                  onClick={handleSubmit}
                  disabled={!value.trim()}
                  size="small"
                  >回复
                </Button>
              </div>
            </Form>
          )
        }
        {children}
    </Comment>
  )
}

const  CommentList = ({list}) => {

  return (
    <div className="comment-list">
      {list.map(comment => (
        <CommentItem
          key={comment.id}
          comment={comment}
          showReplay={true}
          >
          {comment.replices.map(replay => (
            <CommentItem
              comment={replay}
              key={replay.id}
              showReplay={false}/>
          ))
          }
        </CommentItem>
      ))}
    </div>
  )
}


export default CommentList