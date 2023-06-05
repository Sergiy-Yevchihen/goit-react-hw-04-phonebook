import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';

import { ContactListBox } from './ContactList.styled';

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;

  return (
    <ContactListBox>
      {contacts.map((contact, id) => (
        <ContactListItem {...contact} key={id} onRemove={onRemove} />
      ))}
    </ContactListBox>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func,
};

// export default ContactList;

export { ContactList };
