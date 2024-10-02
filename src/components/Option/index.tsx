import IOption from '../../interfaces/IOption';
import styles from './Option.module.scss';

const Option = ({ type, txt, special }: IOption ) => {

  return (
    <div className={styles.option}>
      <p className={styles.option__type}>
        {type}
      </p>

      <div className={styles.option__side}>
        <p className={`
          ${styles.option__txt}
          ${!txt && styles[`option__txt--empty`]}`}
        >
          {txt ? txt : 'add'}
        </p>

        {special &&
          <img
            src="/icons/badge-check.png"
            alt="Selo de usuário verificado"
            width="24"
            height="24"
          />
        }

        <img
          className={styles.option__icon}
          src="/icons/chevron-left.svg"
          alt=""
          width="24"
          height="24"
        />
      </div>
    </div>
  )
}

export default Option;
