import React from 'react'
import { Anchor } from 'antd'
const { Link } = Anchor

// 递归生成目录树
const pushToc = (arr, currentToc) => {
  const len = arr.length
  const lastToc = arr[len - 1] // 同级目录列表的最后一个

  // 判断当前的目录级别和同级目录列表的最后一个是否相同
  if (lastToc && lastToc.tag !== currentToc.tag) {
    // 如果不同，就将当前目录作为最后一个目录的子目录
    pushToc(lastToc.children, currentToc)
  } else {
    // 列表为空或者目录级别相同，直接加入目录列表
    arr.push(currentToc)
  }
}

// 匹配文章标题来生成目录树
const getAnchorList = (str) => {
  // 匹配 h1-h6 标签里的内容, [\s\S] 表示一切字符；\1 第一个() 的内容；
  // x(?=y)为先行断言，x只有在y前面才匹配，y不会被计入返回结果
  // 如 <h1 class="title">文章标题</h1> 只会匹配到 <h1 class="title">文章标题
  const pattern = /<(h[1-6])[\s\S]+?(?=<\/\1>)/g
  const list = []

  //  metch:匹配到的内容 $1: 第一个()中匹配到的内容，即 h1-h6
  str.replace(pattern, (metch, $1) => {
    // 去掉 metch 中的 > 字符前全部字符，就得到了标题内容
    // 截取 h1-h6 标签中 id 里的内容用来做锚点导航
    const title = metch.replace(/.*?>/, '')
    const startIndex = metch.indexOf('"')
    const endIndex = metch.indexOf('">')
    const href = `#${metch.slice(startIndex + 1, endIndex)}`

    // 当前目录
    const currentToc = {
      tag: $1,
      title,
      href,
      children: []
    }
    // 每次匹配到就生成一次目录树
    pushToc(list, currentToc)
  })
  return list
}

// 根据 html 生成锚点导航
const AnchorNav = ({content}) => {
  const list = getAnchorList(content)
  const renderLink = ({href, title, children}) => (
    <Link key={href} href={href} title={title}>
      {children.length > 0 && children.map(sub => renderLink(sub))}
    </Link>
  )
  return (
    <Anchor affix={false}>{list.map(renderLink)}</Anchor>
  )
}

export default AnchorNav
