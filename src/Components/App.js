// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterField from './FilterField/FilterField';

const App = () => {
  // let [items, setItems] = useState([]);
  // let [filter, setFilter] = useState('');

  // const addItem = ({name, number}) => {
  //   const arrNames = items.map(item => item.name);

  //   if (!arrNames.includes(name)) {
  //     const item = {
  //       id: uuidv4(),
  //       name,
  //       number,
  //     };
  //     setItems(prevState => [...prevState, item]);
  //   } else {
  //     alert(`${name} is already in contacts`);
  //   }
  // };

  // const deleteItem = id =>
  //   setItems(prev => prev.filter(item => item.id !== id));

  // const onChangeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const filteredContactsByInputValue = () => {
  //   const normalizedInputValue = filter.toLowerCase().trim();
  //   if (normalizedInputValue !== '') {
  //     return items.filter(item =>
  //       item.name.toLowerCase().includes(normalizedInputValue),
  //     );
  //   }
  // };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {/* onSubmit={addItem}  */}
      <h2>Contacts</h2>
      <FilterField />
      {/* searchQuery={filter} onChange={onChangeFilter}  */}
      <ContactList
      // items={items}
      // onHandleDelete={deleteItem}
      // filteredContactsByInputValue={filteredContactsByInputValue()}
      />
    </>
  );
};

export default App;
