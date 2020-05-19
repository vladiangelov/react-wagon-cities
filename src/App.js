import React from 'react';
import './App.scss';
import CityList from './components/CityList';

function App() {
  return (
    <div className="app">
      <div className="cities">
        <CityList />
      </div>
      <div className="active-city">
        ACTIVE CITY
      </div>
    </div>
  );
}

export default App;
