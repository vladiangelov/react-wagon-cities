import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {

  render() {
    const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;
    return (
      <div className="active-city">
        <p>{this.props.activeCity.name}</p>
        <p>{this.props.activeCity.address}</p>
        <img src={url} alt=""/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};

export default connect(mapStateToProps)(ActiveCity);
