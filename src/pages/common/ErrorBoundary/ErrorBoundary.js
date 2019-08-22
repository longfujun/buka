import React, { Component } from 'react'
import './style.scss'
const ErrorPanel = ()=>{
    return (
        <div className="error-info">
            <img src="https://i.52112.com/icon/jpg/256/20190226/31310/1547329.jpg" alt="" />
            <p>崩溃了～请重启</p>
        </div>
    )
}

export default class ErrorBoundary extends Component {
    state = {
        isError: false
    }
    render() {
        return this.state.isError ? <ErrorPanel /> : this.props.children;
    }
    componentDidCatch(){
        // 1.错误提示
        this.setState({isError: true});
        // 2.将错误信息发送给后台
    }
}
