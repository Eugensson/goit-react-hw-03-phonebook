import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, FormBtn } from './ContactForm.styled';

class ContactForm extends Component {
  state = { name: '', number: '' };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.onHandleSubmit}>
        <Label>
          Name
          <input
            onChange={this.onInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <input
            onChange={this.onInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <FormBtn type="submit">Add Contact</FormBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onInputChange: PropTypes.func,
  onAddContact: PropTypes.func,
};

export default ContactForm;
