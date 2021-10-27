import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterField from './FilterField/FilterField';

const App = () => {
  let [contacts, setContacts] = useState([]);
  let [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const arrNames = contacts.map(contact => contact.name);

    if (!arrNames.includes(name)) {
      const contact = {
        id: uuidv4(),
        name,
        number,
      };
      setContacts(prevState => [...prevState, contact]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const deleteContact = id =>
    setContacts(prev => prev.filter(contact => contact.id !== id));

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContactsByInputValue = () => {
    const normalizedInputValue = filter.toLowerCase().trim();
    if (normalizedInputValue !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedInputValue),
      );
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <FilterField searchQuery={filter} onChange={onChangeFilter} />
      <ContactList
        contacts={contacts}
        onHandleDelete={deleteContact}
        filteredContactsByInputValue={filteredContactsByInputValue()}
      />
    </>
  );
};

export default App;

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   addContact = (name, number) => {
//     const arrNames = this.state.contacts.map(contact => contact.name);

//     if (!arrNames.includes(name)) {
//       const contact = {
//         id: uuidv4(),
//         name,
//         number,
//       };
//       this.setState({
//         contacts: [...this.state.contacts, contact],
//       });
//     } else {
//       alert(`${name} is already in contacts`);
//     }
//   };

//   deleteContact = id =>
//     this.setState(prev => ({
//       contacts: prev.contacts.filter(contact => contact.id !== id),
//     }));

//   onChangeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   filteredContactsByInputValue = () => {
//     const { contacts, filter } = this.state;
//     const normalizedInputValue = filter.toLowerCase().trim();
//     if (normalizedInputValue !== '') {
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(normalizedInputValue),
//       );
//     }
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     const parsedSavedContacts = JSON.parse(savedContacts);
//     if (parsedSavedContacts) {
//       this.setState({ contacts: parsedSavedContacts });
//     }
//   }

//   componentDidUpdate(prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const {
//       addContact,
//       onChangeFilter,
//       deleteContact,
//       filteredContactsByInputValue,
//     } = this;
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={addContact} />
//         <h2>Contacts</h2>
//         <FilterField
//           searchQuery={this.state.filter}
//           onChange={onChangeFilter}
//         />
//         <ContactList
//           contacts={this.state.contacts}
//           onHandleDelete={deleteContact}
//           filteredContactsByInputValue={filteredContactsByInputValue()}
//         />
//       </>
//     );
//   }
// }

// export default App;
