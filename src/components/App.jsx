import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filterItem, setFilter] = useState('');

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) setContacts(JSON.parse(localContacts));
  }, []);

  useEffect(() => {
    contacts.length !== 0
      ? localStorage.setItem('contacts', JSON.stringify(contacts))
      : localStorage.removeItem('contacts');
  }, [contacts]);

  const createUser = user => {
   setContacts([...contacts, user]);
  };

  const filter = value => {
    setFilter(value);
  };

  const getVisibleFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterItem.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} createUser={createUser} />
      <Filter filter={filter} />
      <ContactList deleteItem={deleteContact} contacts={getVisibleFilter()} />
    </div>
  );
};
