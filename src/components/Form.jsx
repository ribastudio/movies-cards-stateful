import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="">
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
        <label data-testid="subtitle-input-label" htmlFor="subtitleInput">
          Subtítulo
          <input
            name="subtitleInput"
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Caminho da imagem
          <input
            name="image-input"
            data-testid="image-input"
            type="text"
            value={ imagePath }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea data-testid="storyline-input" name="storyline-input" type="text" value={ storyline } />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input data-testid="rating-input" name="rating-input" type="text" value={ rating } />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select name="genre-input" data-testid="genre-input" type="text" value={ genre }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

export default Form;
