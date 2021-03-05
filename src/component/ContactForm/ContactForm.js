import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const searchSameName = this.props.items.find(
      contact => contact.name === this.state.name,
    );
    console.log(searchSameName);

    if (searchSameName) {
      alert(`${this.state.name} is already in contacts`);
      return;
    } else if (this.state.name.length === 0) {
      alert('Fields must be filled!');
      return;
    }
    this.props.onAddContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={styles.TaskEditor} onSubmit={this.handleSubmit}>
        <label className={styles.TaskEditor_label}>
          Name
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.TaskEditor_label}>
          Number
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.TaskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};

const mapStateToProps = state => {
  //console.log(state);
  return {
    items: state.contacts.items,
  };
};

const mapDispatchToProps = dispatch => ({
  onAddContact: text => dispatch(contactsOperations.addContact(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
