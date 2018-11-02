import { combineReducers } from 'redux';
import pointCharges from './pointCharges';
import displayPreferences from './displayPreferences';

export default combineReducers({
    pointCharges,
    displayPreferences,
});