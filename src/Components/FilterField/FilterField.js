import React from 'react';
import s from './FilterField.module.css';
import PropTypes from 'prop-types';

const FilterField = ({ searchQuery, onChange }) => {
  return (
    <div className={s.filterField__conteiner}>
      <label className={s.filterField__label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={searchQuery}
          onChange={onChange}
          className={s.filterField__input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
    </div>
  );
};

FilterField.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default FilterField;
