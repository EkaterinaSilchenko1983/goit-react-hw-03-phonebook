import { PropTypes } from 'prop-types';
import { ButtonDelete, ContactItem, List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map((contact, id) => (
        <ContactItem key={id}>
          {contact.name}: {contact.number}
          <ButtonDelete type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </ButtonDelete>
        </ContactItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
