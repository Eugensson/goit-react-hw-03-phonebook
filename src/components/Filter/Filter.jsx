import PropTypes from 'prop-types';

import { Label, Input } from './Filter.styled';

const Filter = ({ value, handleInputChange }) => {
  return (
    <Label>
        Find contacts by name
        <Input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="Enter name"
        />
    </Label>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Filter;