import { photoTemplates } from '@/data';

const getTemplateData = (selectedTemplate, dataType) => {
  const templateData = photoTemplates.find((template) => template.caption === selectedTemplate);

  return templateData[dataType];
};

export { getTemplateData };