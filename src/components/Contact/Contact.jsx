import PropTypes from 'prop-types';

import { Info, Btn } from './Contact.styled';

const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <Info>{name}: {number}</Info>
      <Btn
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </Btn>
    </>
  )
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;