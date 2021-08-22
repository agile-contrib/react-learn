import React from "react"

export default class Index extends React.Component {
    constructor() {
        super()

        // 创建ref对象
        this.refDemo = React.createRef()
    }
    doit = () => {

        // 不推荐，其实就是DOM操作
        console.log(this.refDemo.current.value);
    }
    render() {
        return (<div>

            {/* 绑定ref */}
            <input ref={this.refDemo} />

            <button onClick={this.doit}>点击查看输入框的值</button>
        </div>)
    }
}
