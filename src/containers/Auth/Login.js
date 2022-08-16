import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { Redirect } from 'react-router-dom';


import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
        
    }

    handleOnChangeInput = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        console.log('username:' ,this.state.username)
        console.log('password:' ,this.state.password)
        console.log('allstate:' ,this.state)
        this.setState({
            errMessage: '',
        })
        try {
           let data =  await handleLoginApi(this.state.username, this.state.password);
           if(data && data.errCode !==0) {
               this.setState({
                   errMessage: data.message
               })
           }
           if(data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user) 
               console.log('login succeed');
           }

        }catch(error) {
            if(error.response) {
                if(error.response.data){
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        } 
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    HandleManageDetail = (station) => {
        console.log("detail is: ", station );
        this.props.history.push(`/system/user-redux`)
        return <Redirect to = "/user" push={true} />
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            this.handleLogin();
        }
    }

    render() {
        

        return (
            <div className = "login-background">
                <div className = "login-container">
                    <div className = "login-content">
                        <div className = "col-12 login-text">Login</div>
                        <div className = "col-12 form-group login-input">
                            <label>Username:</label>
                            <input 
                                type = "text" 
                                className = "form-control"  
                                placeholder = "Input your usename"
                                value = {this.state.username}
                                onChange = {(event) => {this.handleOnChangeInput(event)}}/>
                            </div>
                        <div className = "col-12 form-group login-input">
                            <label>Password:</label>
                            <div className = "custom-input-password">
                            <input 
                                type = "text" 
                                className = "form-control" 
                                type = {this.state.isShowPassword ? 'text' : 'password'}
                                placeholder = "Input your password"
                                onChange = {(event) => {this.handleOnChangePassword(event)}}
                                oneKeyDown = {(event) => this.handleKeyDown(event)}/>
                                <span
                                onClick = {() => {this.handleShowHidePassword()}}>
                                    <i class = {this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>

                                </span>                            
                            </div>
                            
                        </div>
                        <div className = "col-12" style = {{ color: 'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className = "col-12">
                            <button className = "login-btn"
                            onClick = {() => {this.handleLogin()}}
                            // onClick ={(item) => this.HandleManageDetail(item)}
                            >
                                Login</button>
                        </div>
                        <div className = "col-12">
                            <span className = "forgot-password">Forgot your password?</span>
                        </div>
                        <div className = "col-12 text-center">
                            <span>Or Login with</span>
                        </div>
                        <div className = "col-12 login-social">
                            <i className = "fab fa-google-plus-g google"></i>
                            <i className = "fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
            
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
