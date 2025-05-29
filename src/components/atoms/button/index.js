import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ onClick, label, disabled }) => {
  return (
    <button className={`${styles.button} ${disabled ? styles.disabled : ''}`} onClick={onClick} disabled={disabled}>{label}</button>
  )
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired
};

export { Button };
