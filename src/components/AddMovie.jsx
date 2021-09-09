import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super()
    this.handleInputChange.bind = this.handleInputChange(this);

    this.state = {
      titleInput: '',
      subtitleInput: '',

    };
  }

  handleInputChange(event) {
    console.log(event.target);
  }

  render() {
    return (
      <div>
        <form action="">
          <label data-testid="title-input-label" htmlFor="title-input">
            <input name="titleInput" data-testid="title-input" type="text" value={} onChange={this.handleInputChange}/>
            Subtítulo
          </label>
          <label data-testid="subtitle-input-label" htmlFor="">
            <input data-testid="subtitle-input" type="text" />
            Título
          </label>
          <label data-testid="image-input-label" htmlFor="">
            <input data-testid="image-input" type="text" />
            Caminho da imagem
          </label>
          <label data-testid="storyline-input-label" htmlFor="">
            <input data-testid="storyline-input" type="text" />
            Sinopse
          </label>
          <label data-testid="rating-input-label" htmlFor="">
            <input data-testid="rating-input" type="text" />
            Avaliação
          </label>
          <label data-testid="genre-input-label" htmlFor="">
            <input data-testid="genre-input" type="text" />
            Gênero
          </label>
          <button data-testid="send-button" /*onClick={}*/>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
