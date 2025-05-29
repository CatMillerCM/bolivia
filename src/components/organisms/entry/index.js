import PropTypes from 'prop-types';
import { Buttons } from '@/components/molecules/buttons';
import { Carousel } from '@/components/molecules/carousel';
import styles from './entry.module.css';

const Entry = ({ setEntry, setPlayerMode }) => {
  const handleSingle = () => {
    setEntry(false);
    setPlayerMode('single');
  };

  const handleDouble = () => {
    setEntry(false);
    setPlayerMode('double');
  };

  return (
    <div className={styles.entry}>
      <h1>Salt Flats Photo Generator</h1>
      <p>A lil spield about the salt flats and what the generator is and does and how it works and some fun images below maybe and some more words and words and words and words and words and words and words and words.</p>
      <Carousel />
      <p>Maybe some instruction for buttons</p>
      <Buttons
        firstOnClick={handleSingle}
        secondOnClick={handleDouble}
        firstLabel="Single"
        secondLabel="Double"
      />
    </div>
  )
};

Entry.propTypes = {
  setEntry: PropTypes.func.isRequired,
  setPlayerMode: PropTypes.func.isRequired
};

export { Entry };