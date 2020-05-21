import React from 'react';

const ActiveCity = (props) => {
  const url = `https://kitt.lewagon.com/placeholder/cities/${props.city.slug}`;
  return (
    <div className="active-city">
      <p>{props.city.name}</p>
      <p>{props.city.address}</p>
      <img src={url} alt=""/>
    </div>
  )
}

export default ActiveCity;
