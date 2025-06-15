import Image from 'next/image';
import { saltFlatsImages } from '@/assets';
import styles from './carousel.module.css';

const Carousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {[...saltFlatsImages, ...saltFlatsImages].map((i, index) => (
          <Image key={index} src={i.image} alt={i.alt} width={80} height={80} />
        ))}
      </div>
    </div>
  )
};

export { Carousel };
