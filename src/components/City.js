import React from 'react';

const City = (props) => {
  return(
    <p className="list-group-item">{props.city.name}</p>
  )
}

export default City;
