import React, { Component } from 'react'
import '../css/my.css'

export default class  extends Component {
    render() {
        return (
            <div className='big'>
                <header><i  className='iconfont'>&#xe503;</i></header>
                <div className='p'>
                    <div className="login">
                        <div className='loginP'>
                             <div className="headPortrait"><img src={require("../img/2.gif")}/></div>
                             <span><b className='loginb'>登录/注册</b></span>
                             <span><a className='logina iconfont'>请点击登录 &#xe65c;</a></span>
                        </div>
                        <div className='loginVip'>
                             <p className='Vipa'><a>普通会员</a></p>
                        </div>
                        <div className='login-base'>
                            <div className='account'>
                                <p className="p1">0</p>
                                <p className='p2'>账户余额</p>
                            </div>
                            <div className='integral'>
                                <p className="p1">0</p>
                                <p className='p2'>积分</p>
                            </div>
                            <div className="coupon">
                                <p className="p1">0</p>
                                <p className='p2'>优惠卷</p>
                            </div>
                            <div className='PLUS'>
                                <p className="p1">立即开通</p>
                                <p className='p2'>橙PLUS卡</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centre'>
                   <div className='order-form'>
                     <p className='p1 iconfont'>&#xe725;</p>
                     <p className='p2'>我的订单</p>
                   </div>
                   <div className='wallet iconfont'>
                     <p className='p1'>&#xe665;</p>
                     <p className='p2'>我的票夹</p>
                   </div>
                   <div className='card-bag'>
                     <p className='p1 iconfont'>&#xe52d;</p>
                     <p className='p2'>我的卡包</p>
                   </div>
                   <div className='null'>

                   </div>
                </div>
                <div className='content '>
                    <div className='spectator'>
                        <p className='p1 iconfont'>&#xe601;</p>
                        <p className='p2'>实名购票人</p>
                    </div>
                    <div className='site'>
                        <p className='p1 iconfont'>&#xe625;</p>
                        <p className='p2'>收货地址</p>
                    </div>
                    <div className='feedback'>
                        <p className='p1 iconfont'>&#xe770;</p>
                        <p className='p2'>意见反馈</p>
                    </div>
                    <div className='service'>
                        <p className='p1 iconfont'>&#xe50a;</p>
                        <p className='p2'>客服帮助</p>
                    </div>
                    
                </div>
            <div className='footer'></div>
            </div>
        )
    }
}
