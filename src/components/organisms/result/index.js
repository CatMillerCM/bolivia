import PropTypes from 'prop-types';
import Image from 'next/image';
import { Buttons } from '@/components/molecules/buttons';
import styles from './result.module.css';

const Result = ({ resultImage, setResultImage, setEntry }) => {
  const handleShareImage = () => {
    // handle share
  };

  const handleStartAgain = () => {
    setResultImage(null);
    setEntry(true);
  };
  
  return (
    <div className={styles.resultPage}>
      <Image className={styles.resultImage} src={resultImage} alt="result image" fill/>
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
  photo: PropTypes.string.isRequired,
  setResultImage: PropTypes.func.isRequired,
  setEntry: PropTypes.func.isRequired
};

export { Result };
