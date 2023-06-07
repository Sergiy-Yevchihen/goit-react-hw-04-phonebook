import React, { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { GlobalStyle } from '../theme/GlobalStyle.styled';
import ContactForm from '../ContactForm/ContactForm';
import Section from '../Section';
import { ContactList } from '../ContactList/ContactList';
import Filter from '../Filter';



const App = () => {
  
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];});
    
    const [filter, setFilter] = useState('');
  
  

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const isExistContact = !!contacts.find(
      contact => contact.name === newContact.name
    );

    if (isExistContact) {
      Notify.failure('Contact already exists');
      return !isExistContact;
    }

   

    setContacts(prevContacts => [...prevContacts, newContact]);
    alert('Contact is added to the phonebook');
  };

 

  const handleRemoveContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
    Notify.success('Contact is deleted');
  };

  const handleFilterChange = filter => setFilter(filter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <GlobalStyle />
      <Section title="Phonebook">
        <ContactForm onAdd={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <h3>Find contacts by name</h3>
        <Filter filter={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={visibleContacts}
          onRemove={handleRemoveContact}
        />
      </Section>
    </>
  );
};

export default App;
