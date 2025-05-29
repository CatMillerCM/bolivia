import PropTypes from 'prop-types';
import Image from 'next/image';
import { Button } from '@/components/atoms/button';
import { PhotoButton } from '@/components/atoms/photo-button';
import styles from './photo.module.css';

const Photo = ({ setPlayerMode, photo, setPhoto, setIsLoadingResult, selectedTemplate, setResultImage, setCameraOn, setStream, videoRef }) => {
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
      <div className={styles.buttons}>
        <Button onClick={handleUsePhoto} label="I'm happy with it!" />
        <PhotoButton
          setPlayerMode={setPlayerMode}
          setCameraOn={setCameraOn}
          setStream={setStream}
          videoRef={videoRef}
          label="Retake Photo"
        />
      </div>
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
  setCameraOn: PropTypes.func.isRequired,
  setStream: PropTypes.func.isRequired,
  videoRef: PropTypes.object.isRequired
};

export { Photo };
