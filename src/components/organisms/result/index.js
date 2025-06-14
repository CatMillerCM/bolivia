import PropTypes from 'prop-types';
import Image from 'next/image';
import { Buttons } from '@/components/molecules/buttons';
import styles from './result.module.css';

const Result = ({ resultImage, setResultImage, setPhoto, setSelectedTemplate }) => {
  const handleShareImage = () => {
    // handle share
  };

  const handleStartAgain = () => {
    setResultImage(null);
    setPhoto('');
    setSelectedTemplate(null);
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
  setPhoto: PropTypes.func.isRequired,
  setSelectedTemplate: PropTypes.func.isRequired
};

export { Result };
