// import { connect } from 'react-redux';
// import ContactList from './ContactList';
// import contactsOperations from '../../redux/contacts/contacts-operations';
// import contactsSelectors from '../../redux/contacts/contacts-selectors';

// // const getVisibleContacts = (allContacts, filter) => {
// //   // const { contacts, filter } = this.state;

// //   return allContacts.filter(contacts =>
// //     contacts.name.toLowerCase().includes(filter.toLowerCase()),
// //   );
// // };

// // const mapStateToProps = ({ contacts: { items, filter } }) => ({
// //   contacts: getVisibleContacts(items, filter),
// // });

// const mapStateToProps = state => ({
//   contacts: contactsSelectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onRemoveContact: id => dispatch(contactsOperations.removeContact(id)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
