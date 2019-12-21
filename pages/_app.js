import App from 'next/app'
import 'antd/dist/antd.less'
import '../static/style/common.less'

export default class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}