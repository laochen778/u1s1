import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom';
import Home from './Home';
import Wallet from './Wallet';
import Theater from './Theater';
import My from './My';
import '../iconfont/iconfont.css'

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div > 
               <nav>
                    <div className={"BottomNav"}>
                        <NavLink exact className={"App-link"} activeClassName={"App-active"} to={"/"}>
                            <i className={"iconfont"}>&#xe687;</i><br/>首页
                            </NavLink> 
                        <NavLink className={"App-link"} activeClassName={"App-active"} to={"/Theater"}>
                            <i className={"iconfont"}>&#xe621;</i><br/>剧院
                        </NavLink> 
                        <NavLink className={"App-link"} activeClassName={"App-active"} to={"/Wallet"}>
                            <i className={"iconfont"}>&#xe665;</i><br/>票夹
                        </NavLink> 
                        <NavLink className={"App-link"} activeClassName={"App-active"} to={"/My"}>
                            <i className={"iconfont"}>&#xe63e;</i><br/>我的
                        </NavLink>
                    </div>
                   
               </nav>
               <Route exact path={"/"} component={Home}></Route>
               <Route path={"/Theater"} component={Theater}></Route>
               <Route path={"/Wallet"} component={Wallet}></Route>
               <Route path={"/My"} component={My}></Route>
            </div>
        )
    }
}
