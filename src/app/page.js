'use client';

import Image from 'next/image';
import { use, useState } from 'react';
import { photo } from '@/assets';
import styles from './entry.module.css';

const Page = () => {
  const [playerMode, setPlayerMode] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleSingle = () => {
    setPlayerMode('single');
  };

  const handleDouble = () => {
    setPlayerMode('double');
  };

  const handleTemplateSelect = () => {
    setSelectedTemplate(e.target.value)
  };

  const handleCameraOpen = () => {
    console.log('open camera');
  };

  return (
    <main className={styles.main}>
      {/* <div className={styles.entry}>
        <h1>Salt Flats Photo Generator</h1>
        <p>A lil spield about the salt flats and what the generator is and does and how it works and some fun images below maybe and some more words and words and words and words and words and words and words and words.</p>
        <div className={styles.carousel}>
          <Image src={photo} alt="Lorum Ipsum" />
        </div>
        <p>Maybe some instruction for buttons</p>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={handleSingle}>Single</button>
          <button className={styles.button} onClick={handleDouble}>Double</button>
        </div>
      </div> */}
      <div className={styles.interface}>
        <h2>{playerMode} PLAYERMODE</h2>
        <p>Choose your perspective photo template:</p>
        <div className={styles.imageGrid}>
          <div className={styles.image}>
            <Image src={photo} alt="Lorum Ipsum" value="Template" onClick={handleTemplateSelect}/>
            <p className={styles.caption}>Caption</p>
          </div>
          <div className={styles.image}>
            <Image src={photo} alt="Lorum Ipsum" value="Template" onClick={handleTemplateSelect}/>
            <p className={styles.caption}>Caption</p>
          </div>
        </div>
        <p>Time to take your photo for {selectedTemplate}</p>
        <p>Ensure you keep your face in the shown outline and strike your best SCARED face!</p>
        <button className={styles.button} onClick={handleCameraOpen}>Take Photo</button>
      </div>
    </main>
  );
}

export default Page;
