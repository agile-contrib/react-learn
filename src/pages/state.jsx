import React from "react"

export default class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }

        // 2.利用Function.prototype.bind来修改函数的上下文
        // this.doIt = this.doIt.bind(this);

    }

    // 简写
    // state = {
    //     value: 1
    // }

    // doIt() {
    //     this.setState({
    //         value: this.state.value - 1
    //     })
    // }

    // 3.class的实例方法
    doIt = () => {
        this.setState({
            value: this.state.value - 1
        })
    }

    render() {
        return (<div>
            {this.state.value}

            {/* 1.箭头函数 */}
            <button onClick={() => {
                this.setState({
                    value: this.state.value + 1
                })
            }}>+1（直接写在HTML中）</button>

            <button onClick={this.doIt}>
                -1（定义的方法）
            </button>

        </div>)
    }
}
