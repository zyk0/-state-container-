import {combineReducers} from 'redux';
import CoptersReducers from './copter'; //
import ActiveCopter from './copter-active';

const allReducers = combineReducers ({
	copters: CoptersReducers,
	active: ActiveCopter
	//{ключ: значение} 
	//helicopters: helicoptersReducers
});

export default allReducers;