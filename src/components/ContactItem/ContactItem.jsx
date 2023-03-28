import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(id);
  };

  return (
    <li className={css.item}>
      {name}: {number}
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
