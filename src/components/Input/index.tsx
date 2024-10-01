import { useState } from 'react';
import styles from './Input.module.scss';

interface IProp {
  id: string;
  label: string;
  name: string;
  type?: string;
  tipe?: string;
  value?: string;
}

interface ISelect extends Omit<IProp, 'name'> {
  values: string[];
}

const Input = ({ id, label, name, type = 'text', tipe, value = '' }: IProp) => {
  const [valueIpt, setValueIpt] = useState(value);

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
          <img className={styles.input__iconTipe} src='/icons/info.png' />
          <span className={styles.input__txt}>{tipe}</span>
        </div>}
      </div>
      <input
        className={styles.input__ipt}
        id={id}
        name={name}
        type={type}
        value={valueIpt}
        onChange={(e) => setValueIpt(e.target.value)}
      />
    </fieldset>
  )
}

const InputSelect = ({ id, label, values }: ISelect) => {
  return (
    <fieldset className={styles.input}>
      <label
        className={`
          ${styles.input__label} 
          ${styles[`input__label--select`]}`}
        htmlFor={id}
      >
        {label}
      </label>
      <select
        id={id}
        className={styles.input__ipt}
      >
        {values.map((value, index) => {
          return (
            <option
              key={index}
              value={value}
              className={styles.input__option}
            >
              {value}
            </option>
          );
        })}
      </select>
    </fieldset>
  )
}

export { Input, InputSelect };
