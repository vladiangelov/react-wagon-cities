import React from 'react';
import City from './City';

const CityList = (props) => {
  return (
    <div >
      {props.cities.map((city) => {
        return <City city={city} key ={city.name} />;
      })}
    </div>
  )
}

export default CityList;



