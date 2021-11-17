import {
  ADDCONTACT,
  DELETECONTACT,
  SETFILTERVALUE,
} from '../constants/phoneBookConstants';

const contactsInitialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const phoneBookReducer = (state = contactsInitialState, { type, payload }) => {
  switch (type) {
    case ADDCONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, payload],
        },
      };
    case DELETECONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items.filter(item => item.id !== payload)],
        },
      };
    case SETFILTERVALUE:
      return { ...state, contacts: { ...state.contacts, filter: payload } };

    default:
      return state;
  }
};

export default phoneBookReducer;
