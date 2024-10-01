import styles from './Photo.module.scss';

const Photo = () => {
  return (
    <div className={styles.photo}>
      <img className={styles.photo__img} src="/images/flower-1.png" alt="" />

      <img className={styles.photo__img} src="/images/flower-2.png" alt="" />
      <img className={styles.photo__img} src="/images/flower-2.png" alt="" />
      <img className={styles.photo__img} src="/images/flower-2.png" alt="" />

      <img className={styles.photo__img} src="/images/not-image.png" alt="" />
      <img className={styles.photo__img} src="/images/not-image.png" alt="" />
      <img className={styles.photo__img} src="/images/not-image.png" alt="" />
      <img className={styles.photo__img} src="/images/not-image.png" alt="" />
      <img className={styles.photo__img} src="/images/not-image.png" alt="" />
    </div>
  )
}

export default Photo;
