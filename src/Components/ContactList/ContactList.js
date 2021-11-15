import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({
  items,
  onHandleDelete,
  filteredContactsByInputValue,
}) => {
  return (
    <ul className={s.contactList}>
      {filteredContactsByInputValue
        ? filteredContactsByInputValue.map(({ id, name, number }) => (
            <li key={id} className={s.contactList__item}>
              <p className={s.contactList__itemText}>
                {name}: {number}
              </p>
              <button
                type="button"
                className={s.deleteBtn}
                onClick={() => {
                  onHandleDelete(id);
                }}
              >
                Delete
              </button>
            </li>
          ))
        : items.map(({ id, name, number }) => (
            <li key={id} className={s.contactList__item}>
              <p className={s.contactList__itemText}>
                {name}: {number}
              </p>
              <button
                type="button"
                className={s.deleteBtn}
                onClick={() => {
                  onHandleDelete(id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onHandleDelete: PropTypes.func,
  filteredContactsByInputValue: PropTypes.array,
};

export default ContactList;
