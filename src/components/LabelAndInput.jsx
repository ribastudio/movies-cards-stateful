import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class LabelAndInput extends Component {
  render() {
    const { value, data: { labelDataTestid, labelHtmlFor, labelValue,
      inputName, dataTestid, inputType } } = this.props;
    return (
      <label
        data-testid={ labelDataTestid }
        htmlFor={ labelHtmlFor }
      >
        { labelValue }
        <Input
          inputName={ inputName }
          dataTestid={ dataTestid }
          type={ inputType }
          value={ value }
        />
      </label>
    );
  }
}

LabelAndInput.propTypes = {
  value: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LabelAndInput;
