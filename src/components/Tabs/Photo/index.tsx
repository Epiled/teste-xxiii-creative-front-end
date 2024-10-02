import styles from './Photo.module.scss';
import photos from '../../../mocks/photosGallery';

const Photo = () => {

  const galeria = Array.from({ length: 9 }, (_, index) => (
    <picture className={styles.photo__box}>
      <img key={index}
        className={styles.photo__img}
        src={`/images/${photos[index] ? photos[index].foto : 'not-image.png'}`}
        alt={`${photos[index] ? photos[index].desc : ''}`}
      />
      {index === 0 && <button className={styles.photo__btn}>Cover</button>}
    </picture>
  ))


  return (
    <div className={styles.photo}>
      {galeria}
    </div>
  )
}

export default Photo;
