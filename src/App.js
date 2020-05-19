import React from 'react';
import './App.scss';
import CityList from './components/CityList';

const cities = [
  { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
  { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
  { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
];


function App() {
  return (
    <div className="App">
      <CityList cities={cities} />
    </div>
  );
}

export default App;
