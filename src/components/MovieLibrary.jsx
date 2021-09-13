import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super();

    const { movies } = props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  // Ver a documentação do React constructor, para ver onde passa a props. Dica do Gustavo Santanna

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2 className="gallery-title"> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
