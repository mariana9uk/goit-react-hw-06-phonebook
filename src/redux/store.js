import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './reducer';
import { contactsReducer } from './contactsSlice';


export const store = configureStore({
  reducer: { contacts: contactsReducer, filters: filtersReducer },
});


