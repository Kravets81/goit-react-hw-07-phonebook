import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'Redux/ContactsSlice';
import { filterContactsReducer } from 'Redux/FilterContactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterContactsReducer,
  },
});
