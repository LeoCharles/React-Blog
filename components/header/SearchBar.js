import React, { useState } from 'react'
import { Input, Icon} from 'antd'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleSubmit = () => {
    console.log(keyword)
    setKeyword('')
  }

  return (
    <div className="search-bar">
      <Icon type="search" className="search-icon"/>
      <Input
        value={keyword}
        onChange={handleChange}
        onBlur={handleSubmit}
        onPressEnter={handleSubmit}
        className="search-input"
        placeholder='搜索文章'/>
    </div>
  )
}

export default SearchBar

