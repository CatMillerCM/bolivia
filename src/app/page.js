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
  const [playerMode, setPlayerMode] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [stream, setStream] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [isLoadingResult, setIsLoadingResult] = useState(false);
  const [resultImage, setResultImage] = useState(null);

  const videoRef = useRef(null);

  return (
    <main className={styles.main}>
      <div className={styles.content}>
      {entry && <Entry
        setEntry={setEntry}
        setPlayerMode={setPlayerMode}
      />}
      {playerMode && <Templates
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        playerMode={playerMode}
        setPlayerMode={setPlayerMode}
        setPhoto={setPhoto}
        setCameraOn={setCameraOn}
        setStream={setStream}
        videoRef={videoRef}
      />}
      {cameraOn && <Camera
        videoRef={videoRef}
        setPhoto={setPhoto}
        setPlayerMode={setPlayerMode}
        setCameraOn={setCameraOn}
        stream={stream}
      />}
      {photo && !cameraOn && !isLoadingResult && !resultImage && <Photo
        setPlayerMode={setPlayerMode}
        photo={photo}
        setPhoto={setPhoto}
        setIsLoadingResult={setIsLoadingResult}
        selectedTemplate={selectedTemplate}
        setResultImage={setResultImage}
        setCameraOn={setCameraOn}
        setStream={setStream}
        videoRef={videoRef}
      />}
      {/* {isLoadingResult && (
        <div className={styles.loading}>
          <p>Loading....</p>
        </div>
      )} */}
      {resultImage && <Result
        resultImage={resultImage}
        setResultImage={setResultImage}
        setEntry={setEntry}
      />}
      </div>
    </main>
  );
}

export default Page;
