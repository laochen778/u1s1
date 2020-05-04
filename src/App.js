import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import BottomNav from './views/BottomNav'
import Search from './views/Search/Search'
import Calendar from './views/Calendar/Calendar'

function App() {
  return (
    <div className={"App"}>
      <Router>
        <Switch>
          <Route path={"/Search"} component={Search}></Route>
          <Route path={"/Calendar"} component={Calendar}></Route>
          <Route path={"/"} component={BottomNav}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
