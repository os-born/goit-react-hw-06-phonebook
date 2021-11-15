import {
  ADDCONTACT,
  DELETECONTACT,
  SETFILTERVALUE,
} from '../constants/phoneBookConstants';

const addContact = contact => ({
  type: ADDCONTACT,
  payload: contact,
});

const deleteContact = id => ({
  type: DELETECONTACT,
  payload: id,
});

const getFilterValue = value => ({
  type: SETFILTERVALUE,
  payload: value,
});

export { addContact, deleteContact, getFilterValue };
