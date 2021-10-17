import React, { Component } from 'react';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

const initialState = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ ...initialState });
  };

  onHandleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    return (
      <form onSubmit={this.onHandleSubmit} className={s.contactForm}>
        <label className={s.contactForm__label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onHandleChange}
            className={s.contactForm__input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.contactForm__label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onHandleChange}
            className={s.contactForm__input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={s.contactForm__btn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
