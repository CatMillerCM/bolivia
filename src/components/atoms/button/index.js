import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ onClick, label }) => {
  return (
    <button className={styles.button} onClick={onClick}>{label}</button>
  )
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export { Button };
