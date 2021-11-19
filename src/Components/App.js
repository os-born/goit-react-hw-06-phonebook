// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterField from './FilterField/FilterField';

const App = () => {
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
