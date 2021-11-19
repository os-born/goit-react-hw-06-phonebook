import { combineReducers } from 'redux';
import {
  ADDCONTACT,
  DELETECONTACT,
  SETFILTERVALUE,
} from '../constants/phoneBookConstants';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADDCONTACT:
      return [...state, payload];

    case DELETECONTACT:
      return [...state.filter(item => item.id !== payload)];

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case SETFILTERVALUE:
      return payload;

    default:
      return state;
  }
};

const phoneBookReducers = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default phoneBookReducers;
