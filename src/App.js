import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from './component/ContactList';
import Filter from './component/Filter';
import ContactForm from './component/ContactForm';
import contactsOperations from './redux/contacts/contacts-operations';
import contactsSelectors from './redux/contacts/contacts-selectors';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>

        {this.props.isLoadingContacts && <h3>loading...</h3>}

        <Filter />
        <ContactList />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => {
    console.log('111');
    dispatch(contactsOperations.fetchContacts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
