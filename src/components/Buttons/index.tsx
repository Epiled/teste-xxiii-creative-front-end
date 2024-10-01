import styles from './Buttons.module.scss';

interface IProp {
  text?: string;
  type?: 'default' | 'reverse' | 'gradient' | 'blank';
}

const Button = ({ text = 'Button', type = 'default' }: IProp) => {
  return (
    <button className={styles.button} data-type={type}>
      {type !== 'reverse'
        ?
        text
        :
        <div className={styles.button__wrapper}>
          <div className={styles.button__core}>
            {text}
          </div>
        </div>
      }
    </button>
  )
}

export { Button };
