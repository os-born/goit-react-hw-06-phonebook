import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import {
//   ADDCONTACT,
//   DELETECONTACT,
//   SETFILTERVALUE,
// } from '../constants/phoneBookConstants';

const addContactAction = createAction('contacts/addContact', contact => ({
  payload: { ...contact, id: uuidv4() },
}));

const deleteContactAction = createAction('contacts/deleteContact');

const getFilterValueAction = createAction('contacts/setFilterValue');

export { addContactAction, deleteContactAction, getFilterValueAction };

// const addContactAction = contact => ({
//   type: ADDCONTACT,
//   payload: { ...contact, id: uuidv4() },
// });

// const deleteContactAction = id => ({
//   type: DELETECONTACT,
//   payload: id,
// });

// const getFilterValueAction = value => ({
//   type: SETFILTERVALUE,
//   payload: value,
// });
