import PropTypes from 'prop-types';
import NextImage from 'next/image';
import { Button } from '@/components/atoms/button';
import { PhotoButton } from '@/components/atoms/photo-button';
import { getTemplateData } from '@/utils';
import styles from './photo.module.css';

const Photo = ({ selectedTemplate, photo, setResultCanvas, setCameraOn, setStream, videoRef }) => {
  const createCanvas = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');
  
    const templateImage = new Image();
    templateImage.src = `/templates/${selectedTemplate.toLowerCase().replace(/\s+/g, '-')}.webp`;
  
    const faceImage = new Image();
    faceImage.src = photo;
  
    faceImage.onload = () => {
      templateImage.onload = () => {
        ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);

        const positioning = getTemplateData(selectedTemplate, 'positioning');
        const x = positioning.x;
        const y = positioning.y;
        const width = positioning.width;
        const height = positioning.height;
        const rotation = positioning.rotation;
  
        ctx.save();
        ctx.translate(x + width / 2, y + height / 2);
        ctx.rotate(rotation * Math.PI / 180);
        
        ctx.beginPath();
        ctx.ellipse(0, 0, width * 0.17, height * 0.22, 0, 0, Math.PI * 2);
        ctx.clip();
        
        ctx.filter = 'blur(0.5px)';
        ctx.drawImage(faceImage, -width / 2, -height / 2, width, height);
        
        ctx.restore();
  
        setResultCanvas(canvas);
      };
    };
  };

  return (
    <div className={styles.photoPage}>
      <p className={styles.text}>Here is the photo:</p>
      <NextImage className={styles.photo} src={photo} alt="photo" fill/>
      <div className={styles.buttons}>
        <Button onClick={createCanvas} label="I'm Happy With It" />
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
