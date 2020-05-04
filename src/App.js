import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
<<<<<<< HEAD
import BottomNav from './views/BottomNav';
import login from './views/login';
=======
import BottomNav from './views/BottomNav'
import Search from './views/Search/Search'
import Calendar from './views/Calendar/Calendar'
>>>>>>> 335b9590a7ab394a6821553a49b0f2a7585c578b

function App() {
  return (
    <div className={"App"}>
<<<<<<< HEAD
     
      <Router> 
        <Switch>
        <Route path={"/login"} component={login}></Route>
        <Route path={"/"} component={BottomNav}></Route>
=======
      <Router>
        <Switch>
          <Route path={"/Search"} component={Search}></Route>
          <Route path={"/Calendar"} component={Calendar}></Route>
          <Route path={"/"} component={BottomNav}></Route>
>>>>>>> 335b9590a7ab394a6821553a49b0f2a7585c578b
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
