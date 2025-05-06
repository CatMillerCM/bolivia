'use client';

import Image from 'next/image';
import { useState } from 'react';
import { photoExample } from '@/assets';
import { photoTemplates } from '@/data';
import styles from './entry.module.css';

const Page = () => {
  const [entry, setEntry] = useState(true);
  const [playerMode, setPlayerMode] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [isLoadingResult, setIsLoadingResult] = useState(false);
  const [resultImage, setResultImage] = useState(null);


  const handleSingle = () => {
    setEntry(false);
    setPlayerMode('single');
  };

  const handleDouble = () => {
    setEntry(false);
    setPlayerMode('double');
  };

  const handleTemplateSelect = (e) => {
    setSelectedTemplate(e.target.alt);
  };

  const handleClose = () => {
    setSelectedTemplate(null);
  }

  const handleCameraOpen = () => {
    console.log('open camera');
    // take photo here
    setPlayerMode(null);
    setPhoto('here is the photo');
  };

  const handleUsePhoto = () => {
    setIsLoadingResult(true);

    // add photo to the template
    setIsLoadingResult(false);
    setPhoto(null);
    setResultImage('result image');
  };

  const handleShareImage = () => {
    // handle share
  };

  const handleStartAgain = () => {
    setResultImage(null);
    setEntry(true);
  };

  return (
    <main className={styles.main}>
      {entry && (
        <div className={styles.entry}>
          <h1>Salt Flats Photo Generator</h1>
          <p>A lil spield about the salt flats and what the generator is and does and how it works and some fun images below maybe and some more words and words and words and words and words and words and words and words.</p>
          {/* <div className={styles.carousel}>
            <Image src={photo} alt="Lorum Ipsum" />
          </div> */}
          <p>Maybe some instruction for buttons</p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={handleSingle}>Single</button>
            <button className={styles.button} onClick={handleDouble}>Double</button>
          </div>
        </div>
      )}
      {playerMode && (
        <div className={styles.interface}>
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
          <button className={styles.button} onClick={handleCameraOpen}>Take Photo</button>
        </div>
      )}
      {photo && !isLoadingResult &&  (
        <div className={styles.photoPage}>
          <p>Here is the photo</p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={handleUsePhoto}>I'm happy with it!</button>
            <button className={styles.button} onClick={handleCameraOpen}>Retake Please!</button>
          </div>
        </div>
      )}
      {isLoadingResult && (
        <div className={styles.loading}>
          <p>Loading....</p>
        </div>
      )}
      {resultImage && (
        <div className={styles.resultPage}>
          <Image className={styles.resultPhoto} src={photoExample} alt="photo"/>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={handleShareImage}>Share Image</button>
            <button className={styles.button} onClick={handleStartAgain}>Try Another</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Page;
