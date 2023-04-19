import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/Filter/Filter.styled';

class Filter extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <Label>
          Find contacts by name
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter name"
          />
        </Label>
      </div>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
