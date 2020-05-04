import React, { Component } from 'react'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:1
        };
    }
    render() {
        return (
            <div className={"Home"}>
                <div className={"TopNav"}>
                    <div>
                        <strong className={"i-color iconfont"}>&#xe61d;</strong>
                        <span>全国</span>
                    </div>
                    <div className={"Search"} onClick={()=>{
                        this.props.history.push("/Search")
                    }}>
                        <i className={"iconfont"}>&#xe608;</i>
                        <span >搜索热门演出</span>
                    </div>
                    <div onClick={()=>{
                        this.props.history.push("/Calendar")
                    }}>
                        <i className={"iconfont"}>&#xe699;</i>
                    </div>
                </div>
                <div className={"Banner"}>
                    
                </div>
            </div>
        )
    }
    componentWillMount(){
        
    }
}
