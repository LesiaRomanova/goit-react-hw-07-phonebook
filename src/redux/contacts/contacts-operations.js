import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactError,
  fetchContactSuccess,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactError,
  removeContactSuccess,
} from './contacts-action';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

const addContact = text => dispatch => {
  console.log(addContact);
  const contact = {
    name: text.name,
    number: text.number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const removeContact = contactId => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(removeContactSuccess(contactId)))
    .catch(error => dispatch(removeContactError(error)));
};

export default { fetchContacts, addContact, removeContact };
