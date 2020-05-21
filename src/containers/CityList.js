import React, { Component } from 'react';
import City from './City';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators (
    { setCities: setCities },
    dispatch
  )
};

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  };


  render () {
      return (
    <div >
      {this.props.cities.map((city) => {
        return <City city={city} key ={city.name} />;
      })}
    </div>
  )}

};

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CityList);



