import React, { Component } from 'react';
import { setActiveCity } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators (
    { setActiveCity: setActiveCity },
    dispatch
  )
};

class City extends Component {

  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    let classes = "list-group-item";
    if (this.props.city === this.props.activeCity) {
      classes += " highlighted-city";
    }
    return(
      <p className={classes} onClick={this.handleClick}>{this.props.city.name}</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(City);
