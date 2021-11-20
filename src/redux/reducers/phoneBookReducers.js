import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/phoneBookActions';
// import {
//   ADDCONTACT,
//   DELETECONTACT,
//   SETFILTERVALUE,
// } from '../constants/phoneBookConstants';

const itemsReducer = createReducer([], {
  [actions.addContactAction]: (state, { payload }) => [...state, payload],
  [actions.deleteContactAction]: (state, { payload }) => [
    ...state.filter(item => item.id !== payload),
  ],
});
const filterReducer = createReducer('', {
  [actions.getFilterValueAction]: (_, { payload }) => payload,
});

const phoneBookReducers = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default phoneBookReducers;

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADDCONTACT:
//       return [...state, payload];

//     case DELETECONTACT:
//       return [...state.filter(item => item.id !== payload)];

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case SETFILTERVALUE:
//       return payload;

//     default:
//       return state;
//   }
// };
