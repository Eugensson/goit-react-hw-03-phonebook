import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import {
  ContactListContainer,
  ContactsList,
  ContactNotification,
} from 'components/ContactList/ContactList.styled';

class ContactList extends React.Component {
  render() {
    const { contacts, getFilteredContacts, onContactDelete } = this.props;

    const filteredContacts = getFilteredContacts();

    return (
      <ContactListContainer>
        {contacts.length !== 0 ? (
          <ContactsList>
            {filteredContacts.map(({ id, name, number }) => (
              <ContactListItem
                key={id}
                name={name}
                number={number}
                onContactDelete={() => onContactDelete(id)}
              />
            ))}
          </ContactsList>
        ) : (
          <ContactNotification>
            You don't have any contacts in your phonebook
          </ContactNotification>
        )}
      </ContactListContainer>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  getFilteredContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
