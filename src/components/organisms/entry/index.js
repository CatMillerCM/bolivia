import PropTypes from 'prop-types';
import Image from 'next/image';
import { photoExample } from '@/assets';
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
      <div className={styles.carousel}>
        <Image src={photoExample} alt="Lorum Ipsum" />
      </div>
      <p>Maybe some instruction for buttons</p>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleSingle}>Single</button>
        <button className={styles.button} onClick={handleDouble}>Double</button>
      </div>
    </div>
  )
};

Entry.propTypes = {
  setEntry: PropTypes.func.isRequired,
  setPlayerMode: PropTypes.func.isRequired
};

export { Entry };