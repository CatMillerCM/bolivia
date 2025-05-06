import PropTypes from 'prop-types';
import Image from 'next/image';
import { photoExample } from '@/assets';
import styles from './result.module.css';

const Result = ({ setResultImage, setEntry }) => {
  const handleShareImage = () => {
    // handle share
  };

  const handleStartAgain = () => {
    setResultImage(null);
    setEntry(true);
  };
  
  return (
    <div className={styles.resultPage}>
      <Image className={styles.resultPhoto} src={photoExample} alt="photo"/>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleShareImage}>Share Image</button>
        <button className={styles.button} onClick={handleStartAgain}>Try Another</button>
      </div>
    </div>
  )
};

Result.propTypes = {
  setResultImage: PropTypes.func.isRequired,
  setEntry: PropTypes.func.isRequired
};

export { Result };
