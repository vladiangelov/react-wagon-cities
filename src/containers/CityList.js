import React, { Component } from 'react';
import City from './City';
import { connect } from 'react-redux';
import setCities from '../actions'

class CityList extends Component {
  render () {
      return (
    <div >
      {this.props.cities.map((city) => {
        return <City city={city} key ={city.name} />;
      })}
    </div>
  )}

};

export default CityList;



