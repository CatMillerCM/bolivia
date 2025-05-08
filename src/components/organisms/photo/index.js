import PropTypes from 'prop-types';
import Image from 'next/image';
import { Buttons } from '@/components/molecules/buttons';
import styles from './photo.module.css';

const Photo = ({ setPlayerMode, photo, setPhoto, setIsLoadingResult, selectedTemplate, setResultImage }) => {
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
    <Image className={styles.photo} src={photo} alt="photo" fill/>
    <Buttons
      firstOnClick={handleUsePhoto}
      secondOnClick={handleCameraOpen}
      firstLabel="I`m happy with it!"
      secondLabel="Retake Please!"
    />
  </div>
  )
};

Photo.propTypes = {
  setPlayerMode: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
  setPhoto: PropTypes.func.isRequired,
  setIsLoadingResult: PropTypes.func.isRequired,
  selectedTemplate: PropTypes.string.isRequired,
  setResultImage: PropTypes.func.isRequired,

};

export { Photo };
