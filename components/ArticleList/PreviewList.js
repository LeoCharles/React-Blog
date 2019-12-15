import React from 'react'
import Link from 'next/link'
import { Affix, Divider } from 'antd'

const PreviewList = ({list, title}) => (
  <Affix offsetTop={104}>
    <ul className="preview-list">
      { title && <Divider orientation="left">{title}</Divider> }
      {list.map(item => (
        <li className="item" key={item.id}>
          <Link href={{pathname: '/article', query: {id: item.id}}}>
            <a className="text-ellipsis">{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Affix>
)

export default PreviewList