import { v4 as uuidv4 } from 'uuid';
import {
  ADDCONTACT,
  DELETECONTACT,
  SETFILTERVALUE,
} from '../constants/phoneBookConstants';

const addContactAction = contact => ({
  type: ADDCONTACT,
  payload: { ...contact, id: uuidv4() },
});

const deleteContactAction = id => ({
  type: DELETECONTACT,
  payload: id,
});

const getFilterValueAction = value => ({
  type: SETFILTERVALUE,
  payload: value,
});

export { addContactAction, deleteContactAction, getFilterValueAction };
