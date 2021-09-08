/* API https://www.coingecko.com/en/api/documentation */
import React from 'react'

import './App.css';
import Landing from './component/Landing/Landing';
import Home from './component/Home';

function App() {
  return (
    <div className="coinapp">
      <Landing />
      {/* <Home /> */}
    </div>
  );
}

export default App;