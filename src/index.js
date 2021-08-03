import ReactDOM from 'react-dom'

import '@hai2007/style/normalize.css'

/**
 * 查看的时候，放开需要的部分就可以了
 */

// import Index from './pages/function-component' // 函数组件
// import Index from './pages/class-component' // 类组件

// import Index from './pages/bind-event' // 绑定事件

// import Index from './pages/state' // 状态基本使用，包括this指向问题

// import Index from './pages/input' // 表单（受控组件）
import Index from './pages/input-notCtrl' // 非受控组件

ReactDOM.render(<Index />, document.getElementById('root'))
