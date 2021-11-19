import { combineReducers } from 'redux';
import phoneBookReducers from './reducers/phoneBookReducers';

const rootReducer = combineReducers({
  contacts: phoneBookReducers,
});

export default rootReducer;
