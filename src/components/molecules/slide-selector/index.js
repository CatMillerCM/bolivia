import PropTypes from 'prop-types';
import Image from 'next/image';
import { photoTemplates } from '@/data';
import styles from './slide-selector.module.css';

const SlideSelector = ({ selectedTemplate, setSelectedTemplate }) => {
  const handleTemplateSelect = (e) => {
    setSelectedTemplate(e.target.alt);
  };

  const handleClose = () => {
    setSelectedTemplate(null);
  };

  return (
    <div className={styles.templateCarousel}>
      {photoTemplates.map((template) => (
        <div key={template.caption} className={styles.image}>
          {template.caption === selectedTemplate && <p className={styles.close} onClick={handleClose}>X</p>}
          <Image className={`${template.caption === selectedTemplate ? styles.chosen : ''}`} src={template.photo} alt={template.caption} onClick={(e) => handleTemplateSelect(e)}/>
          <p className={styles.caption}>{template.caption}</p>
        </div>
      ))}
    </div>
  )
};

SlideSelector.propTypes = {
  selectedTemplate: PropTypes.string.isRequired,
  setSelectedTemplate: PropTypes.func.isRequired
};

export { SlideSelector };
