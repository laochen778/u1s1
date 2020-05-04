import React, { Component } from 'react'
import '../css/login.css';
export default class login extends Component {
    render() {
        return (
            <div>
                <div className='Top iconfont' onClick={()=>{
                    this.props.history.go('-1')
                }}>
                &#xe710;
                </div>
                <div className='login-logo'>
                      <img src={"https://m.juooo.com/static/img/login_logo.4a43235.png"} alt=''/>
                </div>
                <div className='login-id'>
                    <input type="text" placeholder=' 请输入手机号/邮箱'/><br/>
                    <input type="password" placeholder=' 请输入密码'/>
                </div>
               <div className='login-login'>
                   登录
               </div>
               <div className='login-btn'>
                   <a href="#">忘记密码</a>
                   <a href="#">验证码登录/注册</a>
               </div>
               <div className='login-foot'>
                    <div className='else'>其他方式登录</div>
                    <div className='foot-right'></div>
               </div>
               <div className='login-img'>
                   <img src={require('../img/33333.png')} alt=""/>
                   <img className='img2' src={"https://m.juooo.com/static/img/weibo.f5b598c.png"} alt=""/>
               </div>
            </div>
        )
    }
}
