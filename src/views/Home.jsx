import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className={"Home"}>
                <div className={"TopNav"}>
                    <div>
                        <strong className={"i-color iconfont"}>&#xe61d;</strong>
                        <span>全国</span>
                    </div>
                    <div className={"Search"}>
                        <i className={"iconfont"}>&#xe608;</i>
                        <span>搜索热门演出</span>
                    </div>
                    <div>
                        <i className={"iconfont"}>&#xe699;</i>
                    </div>
                </div>
                <div className={"Banner"}>
                    
                </div>
            </div>
        )
    }
}
