import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import BottomNav from './views/BottomNav'

function App() {
  return (
    <div className={"App"}>
      <Router>
        <Route path={"/"} component={BottomNav}></Route>
      </Router>
    </div>
  );
}

export default App;
