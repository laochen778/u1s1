import React, {Component} from 'react';

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div className={"TopNav Calendar"}>
                    <div><i className={"iconfont"} onClick={()=>{
                        this.props.history.go(-1)
                    }}>&#xe710;</i></div>
                    <div>演出日历</div>
                    <div><i className={"iconfont"}>&#xe611;</i></div>
                </div>
            </div>
        )
    }
}