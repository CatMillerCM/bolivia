import PropTypes from 'prop-types';
import NextImage from 'next/image';
// import { photoExample } from '@/assets';
import { Button } from '@/components/atoms/button';
import { PhotoButton } from '@/components/atoms/photo-button';
import styles from './photo.module.css';

const Photo = ({ setPlayerMode, template, photo, setResultImage, setCameraOn, setStream, videoRef }) => {
  const createCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
  
    const templateImage = new Image();
    templateImage.src = '/templates/bolivia.jpg';
  
    const faceImage = new Image();
    faceImage.src = photo;
  
    faceImage.onload = () => {
      templateImage.onload = () => {
        ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);

        const x = 400;
        const y = 300;
        const width = 280;
        const height = 350;
  
        ctx.save();
  
        ctx.beginPath();
        ctx.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
        ctx.clip();
  
        ctx.drawImage(faceImage, x, y, width, height);
        ctx.restore();
  
        const resultImage = canvas.toDataURL('image/png');
        setResultImage(resultImage);
      };
    };
  };

  return (
    <div className={styles.photoPage}>
      <p>Here is the photo</p>
      <NextImage className={styles.photo} src={photo} alt="photo" fill/>
      <div className={styles.buttons}>
        <Button onClick={createCanvas} label="I'm happy with it!" />
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
