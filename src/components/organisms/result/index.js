import PropTypes from 'prop-types';
import Image from 'next/image';
import { photoExample } from '@/assets';
import styles from './result.module.css';
import { Buttons } from '@/components/molecules/buttons';

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
      <Buttons
        firstOnClick={handleShareImage}
        secondOnClick={handleStartAgain}
        firstLabel="Share Image"
        secondLabel="Try Another"
      />
    </div>
  )
};

Result.propTypes = {
  setResultImage: PropTypes.func.isRequired,
  setEntry: PropTypes.func.isRequired
};

export { Result };
