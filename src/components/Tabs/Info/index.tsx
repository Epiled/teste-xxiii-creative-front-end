import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__option}>
        <p className={styles.info__txt}>
          Profile
        </p>

        <div>
          Scalet
        </div>
      </div>
    </div>
  )
}

export default Info;
