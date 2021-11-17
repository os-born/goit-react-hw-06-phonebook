import React from 'react';
import s from './FilterField.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFilterValueAction } from '../../redux/actions/phoneBookActions';

const FilterField = ({ searchQuery, onChange }) => {
  return (
    <div className={s.filterField__conteiner}>
      <label className={s.filterField__label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={searchQuery}
          onChange={e => onChange(e.target.value)}
          className={s.filterField__input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(getFilterValueAction(value)),
});

FilterField.propTypes = {
  // searchQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterField);
