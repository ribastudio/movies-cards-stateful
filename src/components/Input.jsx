import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { inputName, dataTestid, type, inputType } = this.props;
    return (
      <input
        name={ inputName }
        data-testid={ dataTestid }
        type={ type }
        value={ inputType }
        onChange={ console.log('oi') }
      />
    );
  }
}

Input.propTypes = PropTypes.shape({
  inputName: PropTypes.string,
  dataTestid: PropTypes.string,
  type: PropTypes.string,
  inputType: PropTypes.string,
}).isRequired;
export default Input;
