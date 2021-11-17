import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneBookReducer from './reducers/phoneBookReducer';

export const store = createStore(phoneBookReducer, composeWithDevTools());
