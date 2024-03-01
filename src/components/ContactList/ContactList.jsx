import PropTypes from 'prop-types';

import { Contact, Notification } from 'components';

import { Wrapper, List, Item } from './ContactList.styled';

const ContactList = ({ onDeleteContact, getFilteredContacts }) => {
  const filteredContacts = getFilteredContacts();
  return (
    <Wrapper>
      {filteredContacts.length !== 0
        ? <List>
            {filteredContacts.map(({id, name, number}) => (
              <Item key={id}>
                <Contact
                  name={name}
                  number={number}
                  onDeleteContact={()=>onDeleteContact(id)}
                />
              </Item>              
          ))}
          </List>
        : <Notification message="No search results found"/>}
    </Wrapper>   
  )
}

ContactList.propTypes = {  
  getFilteredContacts: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactList;