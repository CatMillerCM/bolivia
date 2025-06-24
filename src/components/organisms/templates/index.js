'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import Image from 'next/image';
import { PhotoButton } from '@/components/atoms/photo-button';
import { TemplateGrid } from '@/components/molecules/template-grid';
import { photoTemplates } from '@/data';
import { Button } from '@/components/atoms/button';
import styles from './templates.module.css';

const Templates = ({ selectedTemplate, setSelectedTemplate, setCameraOn, setStream, videoRef }) => {
  const [continuing, setContinuing] = useState(false);
  // to do - utils
  const getTemplatePhoto = (selectedTemplate) => {
    console.log(selectedTemplate)
    const templateData = photoTemplates.find((template) => template.caption === selectedTemplate);
    console.log(templateData)
    return templateData.photo;
  };

  return (
    <div className={styles.templates}>
      {!continuing ?
        (
          <>
            <p>Choose your perspective photo template:</p>
            <TemplateGrid 
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
            />
            <Button onClick={() => setContinuing(true)} label="Continue" disabled={!selectedTemplate}/>
          </>
        ) :
        (
          <>
            <p>Time to take your photo for:</p>
            <p className={styles.templateName}>{selectedTemplate}</p>
            <Image src={getTemplatePhoto(selectedTemplate)} alt={selectedTemplate}/>
            <p>Ensure you keep your face in the shown outline, have good lighting and give us a good expression!</p>
            <PhotoButton
              setCameraOn={setCameraOn}
              setStream={setStream}
              videoRef={videoRef}
              selectedTemplate={selectedTemplate}
            />
          </>
        )
      }
    </div>
  )
};

Templates.propTypes = {
  selectedTemplate: PropTypes.string.isRequired,
  setSelectedTemplate: PropTypes.func.isRequired,
  setPhoto: PropTypes.func.isRequired,
  setCameraOn: PropTypes.func.isRequired,
  videoRef: PropTypes.object.isRequired
};

export { Templates };