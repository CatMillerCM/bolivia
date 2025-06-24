'use client';

import { useState, useRef } from 'react';
import { Camera } from '@/components/organisms/camera';
import { Entry } from '@/components/organisms/entry';
import { Photo } from '@/components/organisms/photo';
import { Templates } from '@/components/organisms/templates';
import { Result } from '@/components/organisms/result';
import styles from './page.module.css';

const Page = () => {
  const [entry, setEntry] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [stream, setStream] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [resultCanvas, setResultCanvas] = useState(null);

  const videoRef = useRef(null);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
      {entry && <Entry
        setEntry={setEntry}
      />}
      {!entry && !cameraOn && !photo && !resultCanvas && <Templates
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        setPhoto={setPhoto}
        setCameraOn={setCameraOn}
        setStream={setStream}
        videoRef={videoRef}
      />}
      {cameraOn && <Camera
        videoRef={videoRef}
        setPhoto={setPhoto}
        setCameraOn={setCameraOn}
        stream={stream}
      />}
      {photo && !cameraOn && !resultCanvas && <Photo
        photo={photo}
        setPhoto={setPhoto}
        selectedTemplate={selectedTemplate}
        setResultCanvas={setResultCanvas}
        setCameraOn={setCameraOn}
        setStream={setStream}
        videoRef={videoRef}
      />}
      {resultCanvas && <Result
        resultCanvas={resultCanvas}
        setResultCanvas={setResultCanvas}
        setPhoto={setPhoto}
        setSelectedTemplate={setSelectedTemplate}
      />}
      </div>
    </main>
  );
}

export default Page;
