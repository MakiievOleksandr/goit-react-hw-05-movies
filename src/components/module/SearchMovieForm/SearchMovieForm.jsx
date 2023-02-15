import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchMovieForm = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setState(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(state);
    setState('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          onChange={handleChange}
          autoComplete="off"
          type="text"
          name="search"
          value={state}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMovieForm;

SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
