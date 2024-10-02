import styles from './Photo.module.scss';
import photos from '../../../mocks/photosGallery';

const Photo = () => {

  const galeria = Array.from({ length: 9 }, (_, index) => (
    <img key={index}
      className={styles.photo__img}
      src={`/images/${photos[index] ? photos[index].foto : 'not-image.png'}`}
      alt={`${photos[index] ? photos[index].desc : ''}`}
    />
  ))


  return (
    <div className={styles.photo}>
      {galeria}
    </div>
  )
}

export default Photo;
