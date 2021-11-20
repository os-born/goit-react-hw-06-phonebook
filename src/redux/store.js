// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducers from './reducers/phoneBookReducers';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: {
    contacts: phoneBookReducers,
  },
  devTools: process.env.NODE_ENV === 'development',
});
