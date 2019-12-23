const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')

// 既使用 css 也使用 less
module.exports = withCss(withLess({
  // 解决 antd 引入 less 样式失效
  lessLoaderOptions : {
    javascriptEnabled : true
  },
  // 是否使用 css modules
  cssModules: false
}))
