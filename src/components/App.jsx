import { Component } from "react";
import { nanoid } from "nanoid";

import { IconContext } from "react-icons";
import { GiRotaryPhone } from "react-icons/gi";
import { ContactForm, Filter, ContactList, Notification } from 'components';

import { Wrapper, TitleWrapper, Title, Subtitle } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '+38-011-459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '+38-022-443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '+38-033-645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '+38-055-227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  onAddContact = ({ name, number }) => {
    const { contacts } = this.state;
  
    if (name.trim() !== '' && number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      const isContactExist = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isContactExist) {
        alert(`${name} is already in contacts`);
        return;
      }

      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  }

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleInputChange = e => {
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  
  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <IconContext.Provider value={{ size: '40px', color: '#ffffff' }}>
            <GiRotaryPhone />
          </IconContext.Provider>
          <Title>
            Phonebook
          </Title>
        </TitleWrapper>

        
        <ContactForm onSubmit={this.onAddContact} />

        <Subtitle>Contacts</Subtitle>
        <Filter
          value={this.state.filter}
          handleInputChange={this.handleInputChange}
        />

        {this.state.contacts.length !== 0
          ? <ContactList
              onDeleteContact={this.onDeleteContact}
              getFilteredContacts={this.getFilteredContacts}
            />
          : <Notification message="Your contact list is empty" />
        }
        
      </Wrapper> 
    )
  } 
}

export default App;