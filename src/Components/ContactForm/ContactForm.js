import { useState } from 'react';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContactAction } from '../../redux/actions/phoneBookActions';

const initialContactState = { name: '', number: '' };

const ContactForm = ({ allContacts, addNewContact }) => {
  const [contact, setContact] = useState(initialContactState);

  const onHandleSubmit = e => {
    e.preventDefault();
    const arrNames = allContacts.map(item => item.name);

    if (arrNames.includes(contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      addNewContact(contact);
      setContact(initialContactState);
    }
  };

  const onHandleChange = e => {
    setContact(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={onHandleSubmit} className={s.contactForm}>
      <label className={s.contactForm__label}>
        Name
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={onHandleChange}
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
          value={contact.number}
          onChange={onHandleChange}
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
};

const mapStateToProps = state => ({
  allContacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addNewContact: contact => {
    dispatch(addContactAction(contact));
  },
});

ContactForm.propTypes = {
  allContacts: PropTypes.array,
  addNewContact: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
