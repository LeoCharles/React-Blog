import React, { useState} from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import CommentList from './CommentList'
import CommentEditor from './CommentEditor'
import '../../static/style/discuss.less'


// 评论留言组件
const Discuss = (props) => {
  const { comments, articleId } = props
  const [value, setValue] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)

  const handleMenuClick = (e) => {
    const handleMap = {
      'login': () => console.log('login'),
      'register': () => console.log('register'),
      'logout': () => console.log('logout')
    }
    handleMap[e.key]()
  }


  // 提交评论/留言
  const handleSubmit = () => {
    console.log(value)
  }

  const renderDropdownMenu = () => {
    return (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="login">登录</Menu.Item>
        <Menu.Item key="register">注册</Menu.Item>
        <Menu.Item key="logout">注销</Menu.Item>
      </Menu>
    )
  }

  return (
    <div className="discuss">
      <div className="discuss-header">
        <div>
          <span className="count">{comments.length}</span>条评论
        </div>
        <div className="user">
          <Dropdown
            trigger={['hover']}
            overlay={renderDropdownMenu()}>
            <span className="info">未登录用户<Icon type="down" /></span>
          </Dropdown>
        </div>
      </div>
      <CommentEditor
        value={value}
        loading={isSubmitting}
        articleId={articleId}
        onChange={e => setValue(e.target.value)}
        onSubmit={handleSubmit}/>
      <CommentList
        list={comments}/>
    </div>
  )
}
export default Discuss
