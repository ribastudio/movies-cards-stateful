import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  // onChangeInput({ target }) {
  //   //
  // }

  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section className="form-body">
        <form action="" data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="searchText">
            Inclui o texto:
            <input
              value={ searchText }
              onChange={ onSearchTextChange }
              type="text"
              name="searchText"
              data-testid="text-input"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="chkFavorite">
            <input
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              type="checkbox"
              name="bookmarkedOnly"
              data-testid="checkbox-input"
            />
            Mostrar somente favoritos
          </label>
          <label data-testid="select-input-label" htmlFor="selectGenre">
            Filtrar por gênero
            <select
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              name="selectedGenre"
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

SearchBar.propTypes = {
  // searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  // bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  // selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
