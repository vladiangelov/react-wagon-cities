const citiesReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case 'SET_CITIES':
      return action.paylod;
    default:
      return state;
  }

};

export default citiesReducer;
