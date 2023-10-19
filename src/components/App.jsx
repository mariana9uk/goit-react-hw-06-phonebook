import { ContactForm } from './form';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// const savedContacts = window.localStorage.getItem('contact');
// const getSavedContacts = () => {

//   if (savedContacts) {
//     return JSON.parse(savedContacts);
//   }
// };
export const App = () => {

  // const [contacts, setContacts] = useState(getSavedContacts);
  // const contacts = useSelector(state=>state.contacts)
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contact', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   const isContactExists = contacts.find(
  //     contact => contact.name === newContact.name
  //   );

  //   if (isContactExists) {
  //     alert(`Contact with name '${newContact.name}' already exists!`);
  //   } else {
  //     setContacts(prevState => [...prevState, newContact]);
  //   }
  // };
  // const removeContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const handleFilterChange = event => {
  //   setFilter(event.target.value);
  // };

  // const getFilteredContacts = () => {
  //   if (!savedContacts) {
  //     return
  //   }
  //   const normalizedFilter = filter.toLowerCase();
  //   return (
  //     contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  //   );
  // };

  // const filteredContacts = getFilteredContacts();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactsList/>
    </div>
  );
};
