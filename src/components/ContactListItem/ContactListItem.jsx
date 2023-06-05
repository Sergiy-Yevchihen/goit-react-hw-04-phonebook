import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDelete, ContactListLi } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <ContactListLi>
      {name}: {number}
      <ButtonDelete onClick={() => onRemove(id)}>Delete</ButtonDelete>
    </ContactListLi>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};

export default ContactListItem;
