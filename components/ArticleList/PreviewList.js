import React from 'react'
import { Divider } from 'antd'

const PreviewList = ({list, title}) => (
  <>
    { title && <Divider >{title}</Divider> }
    <ul className="preview-list">
      {list.map(item => (
        <li className="item" key={item.id}>
          <a className="text-ellipsis">{item.title}</a>
        </li>
      ))}
    </ul>
  </>
)

export default PreviewList