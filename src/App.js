import React from 'react';
import './App.scss';
import CityList from './containers/CityList';
import ActiveCity from './containers/ActiveCity';

function App() {
  return (
    <div className="app">
      <div className="cities">
        <CityList />
      </div>
      <div>
        <ActiveCity />
      </div>
    </div>
  );
}

export default App;
