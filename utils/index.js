import marked from 'marked'
import hljs from 'highlight.js'

// 转化 markdown 为 html
export const renderMarkdownToHtml = (markdown) => {
  return marked(markdown, {
    renderer: new marked.Renderer(),
    gfm: true,          // 是否使用 Github 风格的 markdown
    pedantic: false,    // 是否只解析符合 markdown 定义的，不修正错误
    breaks: false,      // 是否支持 Github 换行符，要求 gfm 为 true
    sanitize: false,    // 是否忽略 HTML 标签，
    tables: true,       // 是否支持 Github 形式的表格，要求 gfm 为 true
    smartLists: true,   // 是否优化列表输出
    smartypants: false, // 是否使用更为时髦的标点，比如在引用语法中加入破折号
    xhtml: false,       // 是否根据 XHTML 要求为空元素自动关闭标签
    highlight: (code) => hljs.highlightAuto(code).value,
  })
}