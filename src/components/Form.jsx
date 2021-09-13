import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formData from './form_data';
import LabelAndInput from './LabelAndInput';
import Select from './Select';

class Form extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.props;
    const arrayProps = [title, subtitle, imagePath, rating];
    return (
      <form>
        {formData.map((eachValue, i) => (<LabelAndInput
          key={ i }
          data={ eachValue }
          value={ arrayProps[i] }
        />))}
        {/* fazer depois componente textarea */}
        <label data-testid="storyline-input-label" htmlFor="storyline-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline-input"
            type="text"
            value={ storyline }
          />
        </label>
        <Select genre={ genre } />
        <button type="button" data-testid="send-button">Adicionar filme</button>
      </form>
    );
  }
}

Form.propTypes = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}).isRequired;

export default Form;
