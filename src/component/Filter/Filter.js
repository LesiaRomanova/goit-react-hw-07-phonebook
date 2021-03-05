import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-action';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};
Filter.defaultProps = {
  value: '',
  onchangeFilter: () => {},
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
