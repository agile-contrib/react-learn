import ReactDOM from 'react-dom'

import '@hai2007/style/normalize.css'
import './index.css'

/**
 * 查看的时候，分开需要的部分就可以了
 */

// import Index from './pages/function-component' // 函数组件
// import Index from './pages/class-component' // 类组件

import Index from './pages/bind-event' // 绑定事件

ReactDOM.render(<Index />, document.getElementById('root'))
