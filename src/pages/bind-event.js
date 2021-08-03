import React from 'react'

function doit1() {
    alert('触发了普通函数')
}

class Index extends React.Component {
    doit2() {
        alert('触发了对象上的方法')
    }
    render() {
        return (<div>
            <button onClick={doit1}>普通函数</button>
            <button onClick={this.doit2}>对象的方法</button>
        </div>)
    }
}

export default Index
