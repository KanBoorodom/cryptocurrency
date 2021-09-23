/* API https://www.coingecko.com/en/api/documentation */
import React,{useState} from 'react'
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
  const [currencySelected,setCurrencySelected] = useState('thb')
  const [currentPage,setCurrentPage] = useState(1)
  return (
    <Router>
      <div className="coinapp">
        <Switch>
          <Route exact path = "/">
              <Landing />
          </Route>
          <Route  exact path = "/coins">
            <Home 
              currentPage = {currentPage} setCurrentPage = {setCurrentPage}
              currencySelected = {currencySelected} setCurrencySelected = {setCurrencySelected}
            />
          </Route>
          <Route path = "/coins/:coinName">
            <CoinInfo currencySelected = {currencySelected}/>
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