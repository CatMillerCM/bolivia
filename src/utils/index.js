import { photoTemplates } from '@/data';

const getTemplateData = (selectedTemplate, dataType) => {
  const templateData = photoTemplates.find((template) => template.caption === selectedTemplate);

  return templateData[dataType];
};

const createCanvas = (selectedTemplate, photo, setResultCanvas) => {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');

  const templateImage = new Image();
  templateImage.src = `/templates/${selectedTemplate.toLowerCase().replace(/\s+/g, '-')}.webp`;

  const faceImage = new Image();
  faceImage.src = photo;

  faceImage.onload = () => {
    templateImage.onload = () => {
      ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);

      const positioning = getTemplateData(selectedTemplate, 'positioning');
      const x = positioning.x;
      const y = positioning.y;
      const width = positioning.width;
      const height = positioning.height;
      const rotation = positioning.rotation;

      const faceCanvas = document.createElement('canvas');
      faceCanvas.width = canvas.width;
      faceCanvas.height = canvas.height;
      const faceCtx = faceCanvas.getContext('2d');

      faceCtx.save();
      faceCtx.translate(x + width / 2, y + height / 2);
      faceCtx.rotate(rotation * Math.PI / 180);
      faceCtx.beginPath();
      faceCtx.ellipse(0, 0, width * 0.17, height * 0.22, 0, 0, Math.PI * 2);
      faceCtx.clip();
      faceCtx.filter = 'blur(0.7px)';
      faceCtx.drawImage(faceImage, -width / 2, -height / 2, width, height);
      faceCtx.restore();

      const maskCanvas = document.createElement('canvas');
      maskCanvas.width = canvas.width;
      maskCanvas.height = canvas.height;
      const maskCtx = maskCanvas.getContext('2d');

      maskCtx.save();
      maskCtx.translate(x + width / 2, y + height / 2);
      maskCtx.rotate(rotation * Math.PI / 180);

      const radiusX = width * 0.22;
      const radiusY = height * 0.27;
      maskCtx.scale(radiusX, radiusY);

      const gradient = maskCtx.createRadialGradient(0, 0, 0.45, 0, 0, 1);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      maskCtx.fillStyle = gradient;
      maskCtx.beginPath();
      maskCtx.arc(0, 0, 1, 0, Math.PI * 2);
      maskCtx.fill();

      maskCtx.restore();

      faceCtx.globalCompositeOperation = 'destination-in';
      faceCtx.drawImage(maskCanvas, 0, 0);
      faceCtx.globalCompositeOperation = 'source-over';
      ctx.drawImage(faceCanvas, 0, 0);

      setResultCanvas(canvas);
    };
  };
};

export { getTemplateData, createCanvas };