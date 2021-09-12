import React, { Component } from 'react';

export class Input extends Component {
  render() {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          name="titleInput"
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ console.log('oi') }
        />
      </label>
    );
  }
}

export default Input;
