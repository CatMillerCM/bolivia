'use client';

import { useState, useRef } from 'react';
import { Entry } from '@/components/organisms/entry';
import { Templates } from '@/components/organisms/templates';
import { Photo } from '@/components/organisms/photo';
import { Result } from '@/components/organisms/result';
import { Camera } from '@/components/organisms/camera';
import styles from './page.module.css';

const Page = () => {
  const [entry, setEntry] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [stream, setStream] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const videoRef = useRef(null);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
      {entry && <Entry
        setEntry={setEntry}
      />}
      {!entry && !cameraOn && !photo && !resultImage && <Templates
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
      {photo && !cameraOn && !resultImage && <Photo
        photo={photo}
        setPhoto={setPhoto}
        selectedTemplate={selectedTemplate}
        setResultImage={setResultImage}
        setCameraOn={setCameraOn}
        setStream={setStream}
        videoRef={videoRef}
      />}
      {resultImage && <Result
        resultImage={resultImage}
        setResultImage={setResultImage}
        setPhoto={setPhoto}
        setSelectedTemplate={setSelectedTemplate}
      />}
      </div>
    </main>
  );
}

export default Page;
