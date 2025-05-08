import PropTypes from 'prop-types';
import { Button } from '../button';

const PhotoButton = ({ setPlayerMode, setCameraOn, setStream, videoRef }) => {
  const handleCameraOpen = async () => {
    setPlayerMode(false);
    setCameraOn(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(stream);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  return (
    <div>
      <Button onClick={handleCameraOpen} label="Take Photo" />
    </div>
  )
};

PhotoButton.propTypes = {
  setPlayerMode: PropTypes.func.isRequired,
  setCameraOn: PropTypes.func.isRequired,
  setStream: PropTypes.func.isRequired,
  videoRef: PropTypes.object.isRequired
};

export { PhotoButton };
