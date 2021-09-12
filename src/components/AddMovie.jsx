import React, { Component } from 'react';
import Form from './Form';

class AddMovie extends Component {
  constructor() {
    super();
    // this.handleInputChange.bind = this.handleInputChange(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange() {
    //
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <section className="form-body">
        <Form />
      </section>
    );
  }
}

export default AddMovie;
