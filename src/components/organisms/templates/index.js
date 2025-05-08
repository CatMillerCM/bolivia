import PropTypes from 'prop-types';
import Image from 'next/image';
import { photoTemplates } from '@/data';
import { PhotoButton } from '@/components/atoms/photo-button';
import styles from './templates.module.css';

const Templates = ({ selectedTemplate, setSelectedTemplate, playerMode, setPlayerMode, setCameraOn, setStream, videoRef }) => {
  const handleTemplateSelect = (e) => {
    setSelectedTemplate(e.target.alt);
  };

  const handleClose = () => {
    setSelectedTemplate(null);
  }

  // to do - disable camera open button untl template chosen
  return (
    <div className={styles.templates}>
    <h2>{playerMode} PLAYERMODE</h2>
    <p>Choose your perspective photo template:</p>
    <div className={styles.templateCarousel}>
      {photoTemplates.map((template) => (
        <div key={template.caption} className={styles.image}>
          {template.caption === selectedTemplate && <p className={styles.close} onClick={handleClose}>X</p>}
          <Image className={`${template.caption === selectedTemplate ? styles.chosen : ''}`} src={template.photo} alt={template.caption} onClick={(e) => handleTemplateSelect(e)}/>
          <p className={styles.caption}>{template.caption}</p>
        </div>
      ))}
    </div>
    <p>Time to take your photo for {selectedTemplate}</p>
    <p>Ensure you keep your face in the shown outline and strike your best SCARED face!</p>
    <PhotoButton
      setPlayerMode={setPlayerMode}
      setCameraOn={setCameraOn}
      setStream={setStream}
      videoRef={videoRef}
    />
  </div>
  )
};

Templates.propTypes = {
  selectedTemplate: PropTypes.string.isRequired,
  setSelectedTemplate: PropTypes.func.isRequired,
  playerMode: PropTypes.string.isRequired,
  setPlayerMode: PropTypes.func.isRequired,
  setPhoto: PropTypes.func.isRequired,
  setCameraOn: PropTypes.func.isRequired,
  videoRef: PropTypes.object.isRequired
};

export { Templates };