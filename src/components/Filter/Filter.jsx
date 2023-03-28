import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = ({ target }) => {
    setInputValue(target.value);
    filter(target.value);
  };
  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <p className={css.message}>Find contacts by name</p>
      <input
        className={css.input}
        onChange={handleChange}
        type="text"
        name="filter"
        value={inputValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};
