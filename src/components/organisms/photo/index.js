import PropTypes from 'prop-types';
import styles from './photo.module.css';

const Photo = ({ setPlayerMode, setPhoto, setIsLoadingResult, selectedTemplate, setResultImage }) => {
  const handleCameraOpen = () => {
    console.log('open camera');
    // take photo here
    setPlayerMode(null);
    setPhoto('here is the photo');
  };

  const handleUsePhoto = () => {
    setIsLoadingResult(true);

    // add photo to the template
    const template = selectedTemplate;
    setIsLoadingResult(false);
    setPhoto(null);
    setResultImage('result image');
  };

  return (
    <div className={styles.photoPage}>
    <p>Here is the photo</p>
    <div className={styles.buttons}>
      <button className={styles.button} onClick={handleUsePhoto}>I`m happy with it!</button>
      <button className={styles.button} onClick={handleCameraOpen}>Retake Please!</button>
    </div>
  </div>
  )
};

Photo.propTypes = {
  setPlayerMode: PropTypes.func.isRequired,
  setPhoto: PropTypes.func.isRequired,
  setIsLoadingResult: PropTypes.func.isRequired,
  selectedTemplate: PropTypes.string.isRequired,
  setResultImage: PropTypes.func.isRequired,

};

export { Photo };
