'use client';

import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Button } from '@/components/atoms/button';
import styles from './camera.module.css';

const Camera = ({ videoRef, setPhoto, setCameraOn, stream }) => {
  const canvasRef = useRef(null);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const width = video.videoWidth;
      const height = video.videoHeight;

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, width, height);

      const dataURL = canvas.toDataURL('image/png');
      setPhoto(dataURL);

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      setCameraOn(false);
    }
  };

  return (
    <div className={styles.container}>
      <video className={styles.stream} ref={videoRef} autoPlay playsInline />
      <div className={styles.faceOverlay}></div>
      <Button onClick={handleCapture} label="Capture Photo" />
      <canvas className={styles.canvas} ref={canvasRef} />
    </div>
  )
};

Camera.propTypes = {
  videoRef: PropTypes.object.isRequired,
  setPhoto: PropTypes.func.isRequired,
  setCameraOn: PropTypes.func.isRequired,
  stream: PropTypes.instanceOf(MediaStream)
};

export { Camera };