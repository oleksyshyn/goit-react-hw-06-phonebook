import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './slice';
// import { contactsReducer, filterReduser } from './slice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer
    }
});