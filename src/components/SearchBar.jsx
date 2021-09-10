import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends Component {
  // constructor() {
  //   super();

  // this.state = {
  //   searchText: "",
  //   bookmarkedOnly: false,
  //   selectedGenre: '',
  //   movies: '',
  // };
  // }

  render() {
    return (
      <div>
        <section className="form-body">
          <form action="" data-testid="search-bar-form">
            <label htmlFor="searchText">
              Inclui o texto:
              <input type="text" name="searchText" data-testid="text-input" />
            </label>
            <label htmlFor="chkFavorite">
              <input type="checkbox" name="chkFavorite" id="" />
              Mostrar somente os favoritos
            </label>
            <label htmlFor="selectGenre">
              <select name="selectGenre" id="" data-testid="select-input">
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
