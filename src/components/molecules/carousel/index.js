import Image from 'next/image';
import { saltFlatsImages } from '@/assets';
import styles from './carousel.module.css';

const Carousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        {saltFlatsImages.map((i) => (
          <Image key={i.alt} src={i.image} alt={i.alt} />
        ))}
      </div>
    </div>
  )
};

export { Carousel };
