import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     searchText: "",
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: '',
  //   };
  // }

  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, 
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
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
                name="chkFavorite"
                data-testid="checkbox-input"
              />
              Mostrar somente os favoritos
            </label>
            <label data-testid="select-input-label" htmlFor="selectGenre">
              <select
                value={ selectedGenre }
                onChange={ onSelectedGenreChange }
                name="selectGenre"
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
      </div>
    );
  }
}

export default SearchBar;
