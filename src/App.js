import React from 'react';
import {
  NavLink,
  Route
} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Theater from './views/Theater';
import Wallet from './views/Wallet';
import My from './views/My';

function App() {
  return (
    <div className="App">
    <Route path={'/'} exact component={Home}></Route>
    <Route path={'/Theater'} component={Theater}></Route>
    <Route path={'/Wallet'} component={Wallet}></Route>
    <Route path={'/My'} component={My} ></Route> 
    <nav>
      <NavLink to={'/'} exact>首页</NavLink>
      <NavLink to={'/Theater'}>剧院</NavLink>
      <NavLink to={'/Wallet'}>票价</NavLink>
      <NavLink to={'/My'} class="iconfont">我的</NavLink>
    </nav>
    </div>
  );
}

export default App;
