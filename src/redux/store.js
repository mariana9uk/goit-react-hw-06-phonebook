import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser, filtersReducer } from './reducer';


export const store = configureStore({
  reducer: { contacts: contactsReduser, filters: filtersReducer },
});


