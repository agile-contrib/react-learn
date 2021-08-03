import React from "react";

export default class Index extends React.Component {
    constructor() {
        super()
        this.refDemo = React.createRef()
    }
    doit = () => {
        console.log(this.refDemo.current.value);
    }
    render() {
        return (<div>
            <input ref={this.refDemo} />
            <button onClick={this.doit}>点击查看输入框的值</button>
        </div>)
    }
}
