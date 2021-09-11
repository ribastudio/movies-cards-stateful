import React, { Component } from 'react';

class AddMovie extends Component {
  // constructor() {
  //   super();
  //   this.handleInputChange.bind = this.handleInputChange(this);

  //   this.state = {
  //     titleInput: 'ds',
  //     subtitleInput: '',

  //   };
  // }

  // handleInputChange() {
  //   this.setState({
  //     titleInput: ' ',
  //   });
  // }

  render() {
    const { titleInput, subtitleInput } = this.state;
    return (
      <section className="form-body">
        <form action="">
          <label data-testid="title-input-label" htmlFor="title-input">
            Título
            <input
              name="titleInput"
              data-testid="title-input"
              type="text"
              value={ titleInput }
              onChange={ console.log('oi') }
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="subtitleInput">
            Subtítulo
            <input
              name="subtitleInput"
              data-testid="subtitle-input"
              type="text"
              value={ subtitleInput }
              onChange={ this.handleInputChange }
            />
          </label>
          <label data-testid="image-input-label" htmlFor="image-input">
            Caminho da imagem
            <input name="image-input" data-testid="image-input" type="text" />
          </label>
          <label data-testid="storyline-input-label" htmlFor="storyline-input">
            Sinopse
            <input data-testid="storyline-input" name="storyline-input" type="text" />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating-input">
            Avaliação
            <input data-testid="rating-input" name="rating-input" type="text" />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre-input">
            Gênero
            <input name="genre-input" data-testid="genre-input" type="text" />
          </label>
          <button type="button" data-testid="send-button">Adicionar filme</button>
        </form>
      </section>
    );
  }
}

export default AddMovie;
