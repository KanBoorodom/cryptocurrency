/* API https://www.coingecko.com/en/api/documentation */
import React from 'react'
import Landing from './component/Landing/Landing';
import Home from './component/Home';
import CoinInfo from './component/CoinInfo/CoinInfo'
import Lost from './component/Lost';
import './App.css';
import {
  /* BrowserRouter as Router, */
  /* GithubPage need to use hash router instead of BrowserRouter to avoid refresh problem */
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="coinapp">
        <Switch>
          <Route exact path = "/">
              <Landing />
          </Route>
          <Route  exact path = "/coins/:pageNow">
            <Home />
          </Route>
          <Route path = "/coins/page=:pageNow/:coinName/currency=:currencySelected">
            <CoinInfo/>
          </Route>
          <Route path = "*">
            <Lost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;