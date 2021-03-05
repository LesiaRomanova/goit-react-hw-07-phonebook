import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactError = createAction('contacts/fetchContactError');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactError = createAction('contacts/addContactError');
export const addContactSuccess = createAction('contacts/addContactSuccess');

export const removeContactRequest = createAction(
  'contacts/removeContactRequest',
);
export const removeContactError = createAction('contacts/removeContactError');
export const removeContactSuccess = createAction(
  'contacts/removeContactSuccess',
);

export const changeFilter = createAction('contacts / changeFilter');
