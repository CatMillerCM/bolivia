import PropTypes from 'prop-types';
import NextImage from 'next/image';
import { Button } from '@/components/atoms/button';
import { PhotoButton } from '@/components/atoms/photo-button';
import { photoTemplates } from '@/data';
import styles from './photo.module.css';

const Photo = ({ selectedTemplate, photo, setResultCanvas, setCameraOn, setStream, videoRef }) => {
  // utils?
  const getPositioning = (selectedTemplate) => {
    const templateData = photoTemplates.find((template) => template.caption === selectedTemplate);

    return templateData.positioning;
  };

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

        const positioning = getPositioning(selectedTemplate);
        const x = positioning.x;
        const y = positioning.y;
        const width = positioning.width;
        const height = positioning.height;
  
        ctx.save();
  
        ctx.beginPath();
        ctx.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
        ctx.clip();
  
        ctx.drawImage(faceImage, x, y, width, height);
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
        <Button onClick={createCanvas} label="I'm happy with it!" />
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
