import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getContacts } from './selectors';


const contactsInitialState={contacts:[]}
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const{name}=action.payload;
        const isContactExists = state.contacts.find((contact) => contact.name === name)
        console.log(action.payload)
        if (isContactExists) {
          alert(`Contact with name '${action.payload.text.name}' already exists!`)
        } else {
          state.contacts.push(action.payload);
        }
      
        // window.localStorage.setItem('contacts', JSON.stringify(state));
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    removeContact: {
      reducer(state, action) {
        const {id}= action.payload
 state.contacts=state.contacts.filter(contact => contact.id !== id);},
        prepare(id) {
          return {
            payload: {
              id,
              },
          };
        },
      },
    },
  },
);

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
// const savedContacts = JSON.parse(window.localStorage.getItem('contacts')) ?? [];