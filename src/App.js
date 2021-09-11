/* API https://www.coingecko.com/en/api/documentation */
import React from 'react'
import './App.css';
import Landing from './component/Landing/Landing';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="coinapp">
        <Switch>
          <Route exact path = "/" render = {()=>{return <Landing />}}></Route>
          <Route exact path = "/home" render = {()=>{return <Home />}}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;