import React, {Component} from 'react';

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:""
        };
    }
    render() {
        return (
            <div>
                <div className={"TopNav"}>
                    <div className={"SearchHead"}>
                        <i className={"iconfont"}>&#xe608;</i>
                        <input type="text" placeholder="搜索热门演出"/>
                        <i className={"iconfont"}>&#xe9d8;</i>
                    </div>
                    <span className={""} onClick={()=>{
                        this.props.history.go(-1)
                    }}>取消</span>
                </div>
            </div>
        )
    }
}
