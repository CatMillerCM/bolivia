import PropTypes from 'prop-types';
import Image from 'next/image';
import { Button } from '@/components/atoms/button';
import { PhotoButton } from '@/components/atoms/photo-button';
import { createCanvas } from '@/utils';
import styles from './photo.module.css';

const Photo = ({ selectedTemplate, photo, setResultCanvas, setCameraOn, setStream, videoRef }) => {
  return (
    <div className={styles.photoPage}>
      <p className={styles.text}>Here is the photo:</p>
      <Image className={styles.photo} src={photo} alt="photo" fill/>
      <div className={styles.buttons}>
        <Button onClick={() => createCanvas(selectedTemplate, photo, setResultCanvas)} label="I'm Happy With It" />
        <PhotoButton
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
  photo: PropTypes.string.isRequired,
  setPhoto: PropTypes.func.isRequired,
  selectedTemplate: PropTypes.string.isRequired,
  setResultCanvas: PropTypes.func.isRequired,
  setCameraOn: PropTypes.func.isRequired,
  setStream: PropTypes.func.isRequired,
  videoRef: PropTypes.object.isRequired
};

export { Photo };
