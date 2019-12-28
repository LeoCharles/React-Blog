import React, {  useState } from 'react'
import { Modal, Form, Input, Button, Icon} from 'antd'
import { useSelector, useDispatch} from 'react-redux'
import { switchSignModal } from '../../redux/actions/app'

const SignModal = (props) => {
  const dispatch = useDispatch()
  const {type, visible} = useSelector(state => state.app.signModal)

  // 登录表单
  const LoginForm = (props) => {
    const { getFieldDecorator } = props.form
    return (
      <Form layout='horizontal'>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{required: true, message: '请输入用户名'}]
          })(
            <Input
              prefix={<Icon type='user' style={{color: 'rgba(0, 0, 0, .25)'}}/>}
              placeholder='请输入用户名'/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{required: true, message: '请输入密码'}]
          })(
            <Input
              type='password'
              prefix={<Icon type='lock' style={{color: 'rgba(0, 0, 0, .25)'}}/>}
              placeholder='请输入密码'/>
          )}
        </Form.Item>
        <Button type='primary' block htmlType='submit' onClick={handleSubmit} style={{marginBottom: 16}}>登录</Button>
        <Button  block htmlType='submit' icon='github' onClick={githubLogin}>Github 登录</Button>
      </Form>
    )
  }

  // 注册表单
  const RegisterForm = (props) => {
    const { getFieldDecorator } = props.form

    // 确认密码验证
    const compareToFirstPassword = (rule, value, callback) => {
      const { getFieldValue } = props.form
      if (value && value !== getFieldValue('password')) {
        callback('两次密码不一致，请重新输入')
      } else {
        callback()
      }
    }

    return (
      <Form layout='horizontal'>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{required: true, message: '请输入用户名'}]
          })(
            <Input
              prefix={<Icon type='user' style={{color: 'rgba(0, 0, 0, .25)'}}/>}
              placeholder='请输入用户名'/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{required: true, message: '请输入密码'}]
          })(
            <Input
              type='password'
              prefix={<Icon type='lock' style={{color: 'rgba(0, 0, 0, .25)'}}/>}
              placeholder='请输入密码'/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('confirm', {
            rules: [{required: true, message: '请再次输入密码'}, {validator: compareToFirstPassword}]
          })(
            <Input
              type='password'
              prefix={<Icon type='lock' style={{color: 'rgba(0, 0, 0, .25)'}}/>}
              placeholder='请再次输入密码'/>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{required: true, message: '请输入您的邮箱'}, {type: 'email', message: '请输入正确的邮箱'}]
          })(
            <Input
              prefix={<Icon type='mail' style={{color: 'rgba(0, 0, 0, .25)'}}/>}
              placeholder='请输入您的邮箱'/>
          )}
        </Form.Item>
        <Button type='primary' block htmlType='submit' onClick={handleSubmit} style={{marginBottom: 16}}>注册</Button>
        <Button  block htmlType='submit' icon='github' onClick={githubLogin}>Github 登录</Button>
      </Form>
    )
  }

  // 提交登录 / 注册表单
  const handleSubmit = (e) => {
    e.preventDefault()
    const { validateFieldsAndScroll } = props.form
    validateFieldsAndScroll((errors, values) => {
      if (errors) return
      if (type === 'login') {
        console.log(values)
      } else if (type === 'register') {
        console.log(values)
      }
    })

  }

  const githubLogin = (e) => {
    e.preventDefault()

    console.log('github login')
  }

  return (
    <Modal
      width={460}
      visible={visible}
      footer={null}
      title={type === 'register' ? '注册' : '登录'}
      onCancel={() => dispatch(switchSignModal(type, false))}>
      {
        type === 'register' ? <RegisterForm form={props.form}/> : <LoginForm form={props.form}/>
      }
    </Modal>
  )
}

export default Form.create()(SignModal)
