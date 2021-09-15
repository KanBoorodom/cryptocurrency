/* API https://www.coingecko.com/en/api/documentation */
import React,{useState} from 'react'
import Landing from './component/Landing/Landing';
import Home from './component/Home';
import CoinInfo from './component/CoinInfo/CoinInfo'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  const [currencySelected,setCurrencySelected] = useState('thb')
  
  return (
    <Router>
      <div className="coinapp">
        <Switch>
          <Route exact path = "/cryptocurrency">
              <Landing />
          </Route>
          <Route  exact path = "/coins">
            <Home 
              currencySelected = {currencySelected} setCurrencySelected = {setCurrencySelected} 
            />
          </Route>
          <Route path = "/coins/:coinName">
            <CoinInfo currencySelected = {currencySelected}/>
          </Route>
        </Switch>
        {/* <CoinInfo/> */}
      </div>
    </Router>
  );
}

export default App;