import React from "react";

export default class Index extends React.Component {

    state = {
        info: "初始化的值"
    }

    handlerUpdate = e => {
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
