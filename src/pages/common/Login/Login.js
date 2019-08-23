import React, { Component } from 'react';
import { connect } from 'react-redux';
import {requestLoginAction} from '../../../store/modules/user'
import AppHeader from '../../../components/app-header/app-header'
import './style.scss'

class Login extends Component {
    render() {
        return (
            <>
                <AppHeader/>
                <div id="login">
                    <div className='center'>
                        <input type= 'text' placeholder='请输入您的邮箱/手机号' className='user'/>
                        <input type='password' placeholder='请输入密码' className='password'/>
                        <a href='#' className='toggle'>手机快捷登录</a>
                        <button className="btn">登录</button>

                        <div className="footer">
                            <a href='#' className='change'>或使用以下方式登录</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    componentDidMount(){
        this.props.loginData()
    }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
    loginData(){
        let action = requestLoginAction();
        dispatch(action)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);