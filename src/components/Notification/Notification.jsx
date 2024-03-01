import PropTypes from 'prop-types';

import { BsEmojiFrown } from "react-icons/bs";
import { IconContext } from "react-icons";

import { Wrapper, Text } from './Notification.styled';

const Notification = ({message}) => {
  return (
    <Wrapper>
      <Text>
        {message}
      </Text>      
      <IconContext.Provider value={{ size: '30px', color: '#ffffff' }}>
        <BsEmojiFrown />
      </IconContext.Provider>
    </Wrapper>
  )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;