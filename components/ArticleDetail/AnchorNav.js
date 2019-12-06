import React from 'react'
import { Anchor } from 'antd'
const { Link } = Anchor

// 根据文章标题来生成锚点列表
const getAnchorList = (str) => {
  
  const pushItem = (arr, item) => {
    const len = arr.length
    const matchItem = arr[len - 1]
    if(matchItem && matchItem.tag !== item.age) {
      pushItem(matchItem.children, item)
    } else {
      arr.push(item)
    }
  }

  const list = []
  const pattern = /<(h[1-6])[\s\S]+?(?=<\/\1>)/g

  str.replace(pattern, ($0, $1) => {
    const title = $0.replace(/.*?>/, '')
    const startIndex = $0.indexOf('"')
    const endIndex = $0.indexOf('">')
    const href = `#${$0.slice(startIndex + 1, endIndex)}`

    const currentItem = {
      tag: $1,
      title,
      href,
      children: []
    }
    pushItem(list, currentItem)
  })
  return list
}

// 锚点导航
const AnchorNav = ({content}) => {
  const list = getAnchorList(content)
  console.log(list)
  const renderLink = ({href, title, children}) => {
    <Link>
      {children.length > 0 && children.map(sub => renderLink(sub))}
    </Link>
  }
  return (
    <Anchor affix={false}>{list.map(renderLink)}</Anchor>
  )
}

export default AnchorNav
