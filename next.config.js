const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')

if(typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss(withLess({
  // 解决 antd 引入 less 样式 失效
  lessLoaderOptions : {
    javascriptEnabled : true
  }
}))
