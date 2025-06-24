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
      <h1>salt.flat() snaps</h1>
      <p>Salar de Uyuni, located in Bolivia, are the world's largest salt flats at almost 11,000 kilometres squared, and are a popular tourist destination for those seeking unique landscapes and a fun experience. The seemingly never-ending plains of white salt provide the perfect setting for the famous perspective photos that so many enjoy taking.</p>
      <p>Using this app, you too can now create one of these fun photos from home!</p>
      <Carousel />
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