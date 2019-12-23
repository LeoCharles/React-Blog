import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Button } from 'antd'
import SignModal from '../SignModal'
import {switchSignModal} from  '../../redux/actions/app'

/**
 * react-redux v7.1 引入新的 api
 * useSelector：从 redux 的 store 对象中提取数据 state
 * useDispatch：返回 Redux store中对 dispatch 函数的引用
 * useStore: 返回 redux <Provider> 组件的 store 对象的引用
 *
 */


const UserInfo = () => {
  const dispatch = useDispatch()

  return (
    <div className="user-info">
      <Button
        size="small"
        type="primary"
        onClick={() => dispatch(switchSignModal('login', true))}>
        登录
      </Button>
      <Button
        size="small"
        onClick={() => dispatch(switchSignModal('register', true))}>
        注册
      </Button>
      <SignModal />
    </div>
  )
}

export default UserInfo