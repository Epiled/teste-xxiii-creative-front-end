import styles from './Buttons.module.scss';

interface IProp {
  text: string;
}

const Button = ({text}: IProp) => {
  return (
    <button className={styles.button}>
      {text}
    </button>
  )
}

export { Button };
