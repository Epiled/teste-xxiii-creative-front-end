import { ChangeEvent, useState } from 'react';
import styles from './Input.module.scss';
import IInput from '../../interfaces/IInput';

const Input = ({ id, label, name, type = 'text', tipe, value = '', onChange }: IInput) => {
  const [valueIpt, setValueIpt] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueIpt(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <fieldset className={styles.input}>
      <div className={styles.input__top}>
        <label
          className={styles.input__label}
          htmlFor={id}
        >
          {label}
        </label>

        {tipe && <div className={styles.input__tipe}>
          <img className={styles.input__iconTipe} alt='Mais informações sobre o campo' src='/icons/info.svg' />
          <span className={styles.input__txt}>{tipe}</span>
        </div>}
      </div>
      <input
        className={styles.input__ipt}
        id={id}
        name={name}
        type={type}
        value={valueIpt}
        onChange={handleChange}
      />
    </fieldset>
  )
}

export { Input };
