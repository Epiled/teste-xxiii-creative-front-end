import IButton from '../../interfaces/IButton';
import styles from './Buttons.module.scss';

const Button = ({ text = 'Button', type = 'default' }: IButton) => {
  return (
    <button className={styles.button} data-type={type}>
      {type !== 'reverse' ? text : (
        <div className={styles.button__wrapper}>
          <span className={styles.button__core}>
            {text}
          </span>
        </div>
      )}
    </button>
  );
}

export { Button };
