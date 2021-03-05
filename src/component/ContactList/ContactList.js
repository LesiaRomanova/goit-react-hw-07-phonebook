import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { connect } from 'react-redux';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.TaskList}>
    {contacts.map(contact => (
      <li className={styles.TaskList_item} key={contact.id}>
        {contact.name + ':' + contact.number}
        {
          <button
            className={styles.TaskList_button}
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
            // onClick={() => onRemoveContact(id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

// const getVisibleContacts = (allContacts, filter) => {
//   // const { contacts, filter } = this.state;

//   return allContacts.filter(contacts =>
//     contacts.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(contactsOperations.removeContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// export default ContactList;
