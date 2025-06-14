import PropTypes from 'prop-types';
import Image from 'next/image';
import { Buttons } from '@/components/molecules/buttons';
import styles from './result.module.css';

const Result = ({ resultCanvas, setResultCanvas, setPhoto, setSelectedTemplate }) => {
  const handleShareImage = () => {
    resultCanvas.toBlob(async (blob) => {
      if (blob && navigator.canShare) {
        const file = new File([blob], 'Uyuni Salt Flats Perspective Photo.png', { type: 'image/png' });
        await navigator.share({ files: [file] });
      } else {
        alert('Your browser does not support sharing images.');
      }
    }, 'image/png');
  };

  const handleStartAgain = () => {
    setResultCanvas(null);
    setPhoto('');
    setSelectedTemplate(null);
  };
  
  return (
    <div className={styles.resultPage}>
      <Image className={styles.resultCanvas} src={resultCanvas.toDataURL('image/png')} alt="result image" fill/>
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
  setResultCanvas: PropTypes.func.isRequired,
  setPhoto: PropTypes.func.isRequired,
  setSelectedTemplate: PropTypes.func.isRequired
};

export { Result };
