import { useDispatch, useSelector } from 'react-redux';
import { StyledContacts } from './ContactsStyleed';
import { removeContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'redux/selectors';


export const ContactsList = () => {

  const dispatch = useDispatch();
  const {contacts:contacts}= useSelector(state => state.contacts);
  console.log(contacts);

  const contactsListItems = contacts.map(contact => (
    <li key={contact.id}>
      {contact.text.name}:{contact.text.number}
      <button type="button" onClick={() => dispatch(removeContact(contact.id))}>
        Delete
      </button>
    </li>
  ));
  return <StyledContacts>{contactsListItems}</StyledContacts>;
};

// const getVisibleContacts = (contacts, contact) => {
//    switch (statusFilter) {
//      case statusFilters.active:
//        return tasks.filter(task => !task.completed);
//      case statusFilters.completed:
//        return tasks.filter(task => task.completed);
//      default:
//        return tasks;
//    }
//  };