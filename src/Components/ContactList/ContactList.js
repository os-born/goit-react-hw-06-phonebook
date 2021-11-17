import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import { deleteContactAction } from '../../redux/actions/phoneBookActions';

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

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onHandleDelete: id => {
    dispatch(deleteContactAction(id));
  },
});

ContactList.propTypes = {
  contacts: PropTypes.array,
  onHandleDelete: PropTypes.func,
  filteredContactsByInputValue: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
