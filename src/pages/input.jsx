import React from "react"

export default class Index extends React.Component {

    state = {
        info: "初始化的值"
    }

    handlerUpdate = e => {

        // 通过把绑定的key写活，可以复用，避免过多的垃圾代码
        // 当然，比如多选按钮，使用的不是value而是checked，因此值的获取也可以根据输入组件类型动态修改
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (<ul>

            <li>
                单向绑定： {this.state.info}
            </li>
            <li>
                {/* 只有初始化的时候改变 */}
                一次绑定： <input defaultValue={this.state.info} />
            </li>
            <li>
                双向绑定：
                {/* <input value={this.state.info} onChange={e => this.setState({
                    info: e.target.value
                })} /> */}
                <input value={this.state.info} name='info' onChange={this.handlerUpdate} />
            </li>

        </ul>)
    }
}
