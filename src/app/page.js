'use client';

import Image from 'next/image';
import { useState } from 'react';
import { photoExample } from '@/assets';
import styles from './page.module.css';
import { Entry } from '@/components/organisms/entry';
import { Templates } from '@/components/organisms/templates';
import { Photo } from '@/components/organisms/photo';
import { Result } from '@/components/organisms/result';

const Page = () => {
  const [entry, setEntry] = useState(true);
  const [playerMode, setPlayerMode] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [isLoadingResult, setIsLoadingResult] = useState(false);
  const [resultImage, setResultImage] = useState(null);

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
      />}
      {photo && !isLoadingResult && <Photo
        setPlayerMode={setPlayerMode}
        setPhoto={setPhoto}
        setIsLoadingResult={setIsLoadingResult}
        selectedTemplate={selectedTemplate}
        setResultImage={setResultImage}
      />}
      {isLoadingResult && (
        <div className={styles.loading}>
          <p>Loading....</p>
        </div>
      )}
      {resultImage && <Result
        setResultImage={setResultImage}
        setEntry={setEntry}
      />}
      </div>
    </main>
  );
}

export default Page;
