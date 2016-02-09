/**
 * # reducers
 * 
 * This class combines all the reducers into one
 * 
 */
'use string';
/**
 * ## Imports
 * 
 * our 4 reducers
 */ 
import device from './device/deviceReducer';
import global from './global/globalReducer';
import profile from './profile/profileReducer';
import resourceSearch from './resourceSearch/resourceSearchReducer';

import { combineReducers } from 'redux';

/**
 * ## CombineReducers
 * 
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */ 
const rootReducer = combineReducers({
  device,
  global,
  profile,
  resourceSearch
});

export default rootReducer;
