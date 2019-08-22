import React, { Component } from 'react';
import { connect } from 'react-redux';
import {requestLoginAction} from '../../../store/modules/user'

class Login extends Component {
    render() {
        return (
            <div>
                登录
            </div>
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