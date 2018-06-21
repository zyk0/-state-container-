import { combineReducers } from 'redux';
//
import wines from './wines';
import cart from './cart';

export default combineReducers({wines, cart});
