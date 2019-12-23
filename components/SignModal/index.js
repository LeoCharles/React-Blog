import React, {  useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {Form, Input, Button, Modal} from 'antd'
import { switchSignModal } from '../../redux/actions/app'

const SignModal = () => {
  const dispatch = useDispatch()
  const {type, visible} = useSelector(state => state.app.signModal)


  return (
    <Modal
      width={460}
      title={type}
      visible={visible}
      onCancel={() => dispatch(switchSignModal(type, false))}>
        <Form layout="horizontal">
          <Button>{type}</Button>
        </Form>
    </Modal>
  )
}

export default SignModal
