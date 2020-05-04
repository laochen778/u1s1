import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import BottomNav from './views/BottomNav';
import login from './views/login';

function App() {
  return (
    <div className={"App"}>
     
      <Router> 
        <Switch>
        <Route path={"/login"} component={login}></Route>
        <Route path={"/"} component={BottomNav}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
