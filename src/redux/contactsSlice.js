import { createSlice, nanoid } from '@reduxjs/toolkit';

const savedContacts = JSON.parse(window.localStorage.getItem('contacts')) || [];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: savedContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        window.localStorage.setItem('contacts', JSON.stringify(state));
        console.log(state)
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
        return state.filter(contact => contact.id !== action.payload);
      },
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
