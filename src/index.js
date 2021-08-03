import ReactDOM from 'react-dom'

import '@hai2007/style/normalize.css'
import './index.css'

/**
 * 查看的时候，放开需要的部分就可以了
 */

// import Index from './basic/function-component' // 函数组件
// import Index from './basic/class-component' // 类组件

// import Index from './basic/bind-event' // 绑定事件

import Index from './basic/state' // 状态基本使用，包括this指向问题

ReactDOM.render(<Index />, document.getElementById('root'))
