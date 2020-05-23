import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import activeCityReducer from './activeCityReducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  activeCity: activeCityReducer
});

export default rootReducer;
