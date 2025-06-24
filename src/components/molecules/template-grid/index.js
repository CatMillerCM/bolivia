import PropTypes from 'prop-types';
import Image from 'next/image';
import { photoTemplates } from '@/data';
import styles from './template-grid.module.css';

const TemplateGrid = ({ selectedTemplate, setSelectedTemplate }) => {
  const handleTemplateSelect = (e) => {
    if (selectedTemplate === e.target.alt) {
      setSelectedTemplate(null);
    } else {
      setSelectedTemplate(e.target.alt);
    }
  };

  return (
    <div className={styles.templateGrid}>
      {photoTemplates.map((template) => (
        <div key={template.caption} className={styles.image}>
          <Image className={`${template.caption === selectedTemplate ? styles.chosen : ''}`} src={template.photo} alt={template.caption} onClick={(e) => handleTemplateSelect(e)}/>
          <p className={styles.caption}>{template.caption}</p>
        </div>
      ))}
    </div>
  )
};

TemplateGrid.propTypes = {
  selectedTemplate: PropTypes.string.isRequired,
  setSelectedTemplate: PropTypes.func.isRequired
};

export { TemplateGrid };
