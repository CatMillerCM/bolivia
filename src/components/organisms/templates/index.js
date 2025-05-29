import PropTypes from 'prop-types';
import { PhotoButton } from '@/components/atoms/photo-button';
import { SlideSelector } from '@/components/molecules/slide-selector';
import styles from './templates.module.css';

const Templates = ({ selectedTemplate, setSelectedTemplate, playerMode, setPlayerMode, setCameraOn, setStream, videoRef }) => {
  // to do - disable camera open button untl template chosen
  return (
    <div className={styles.templates}>
      <h2>{playerMode} PLAYERMODE</h2>
      <p>Choose your perspective photo template:</p>
      <SlideSelector 
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />
      <p>Time to take your photo for {selectedTemplate}</p>
      <p>Ensure you keep your face in the shown outline and strike your best SCARED face!</p>
      <PhotoButton
        setPlayerMode={setPlayerMode}
        setCameraOn={setCameraOn}
        setStream={setStream}
        videoRef={videoRef}
        selectedTemplate={selectedTemplate}
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