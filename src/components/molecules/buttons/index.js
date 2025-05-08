import PropTypes from 'prop-types';
import { Button } from '@/components/atoms/button';
import styles from './buttons.module.css';

const Buttons = ({ firstOnClick, secondOnClick, firstLabel, secondLabel }) => {
  return (
    <div className={styles.buttons}>
      <Button onClick={firstOnClick} label={firstLabel}/>
      <Button onClick={secondOnClick} label={secondLabel}/>
    </div>
  )
};

Buttons.propTypes = {
  firstOnClick: PropTypes.func.isRequired,
  secondOnClick: PropTypes.func.isRequired,
  firstLabel: PropTypes.string.isRequired,
  secondLabel: PropTypes.string.isRequired
};

export { Buttons };
