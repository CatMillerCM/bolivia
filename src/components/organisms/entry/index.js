import PropTypes from 'prop-types';
import { Button } from '@/components/atoms/button';
import { Carousel } from '@/components/molecules/carousel';
import styles from './entry.module.css';

const Entry = ({ setEntry }) => {
  const handleStart = () => {
    setEntry(false);
  };

  return (
    <div className={styles.entry}>
      <h1>Salt Flats Photo Generator</h1>
      <p>A lil spiel about the salt flats and what the generator is and does and how it works and some fun images below maybe and some more words and words and words and words and words and words and words and words.</p>
      <Carousel />
      <p>Maybe some instruction for buttons</p>
      <Button
        onClick={handleStart}
        label="Start"
      />
    </div>
  )
};

Entry.propTypes = {
  setEntry: PropTypes.func.isRequired
};

export { Entry };