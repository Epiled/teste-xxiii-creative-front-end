import { MouseEvent, useState } from 'react';
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

interface ISelectCustom extends Omit<IProp, 'name'> {
  values: string[];
  icon?: string;
  disabled?: boolean;
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

const InputSelectCustom = ({ id, label, values, icon, disabled }: ISelectCustom) => {

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Brasil");
  const [isDisabled] = useState(disabled || false);

  const handleActive = () => {
    if(!isDisabled) setIsActive((prev) => !prev);
  }

  const handleSelected = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const value = e.currentTarget.dataset.value;
    if (value) setSelected(value);
    handleActive();
  }

  return (
    <fieldset 
    className={`
      ${styles.input}
      ${isDisabled && styles[`input--disabled`]}`}
    >
      <label
        className={`
          ${styles.input__label} 
          ${styles[`input__label--select`]}`}
        htmlFor={id}
      >
        {label}
      </label>

      <div className={styles.input__wrapper}>
        <div
          className={`
            ${styles.input__ipt}
            ${styles[`input__ipt--custom`]}`}
          onClick={handleActive}
        >
          {icon && <img src={`/icons/${icon}.png`} className={styles.input__icon} />}
          {selected}
          <img
            src="/icons/chevron-left.png"
            alt=""
            className={`
              ${styles.input__icon}
              ${styles[`input__icon--arrow`]}
              ${isActive && styles[`input__icon--active`]}`}
          />
        </div>
        <ul className={`
          ${styles.input__custom}
          ${isActive && styles[`input__custom--active`]}`}>
          {values.map((value, index) => {
            return (
              <li
                key={index}
                data-value={value}
                className={styles.input__option}
                onClick={(e) => handleSelected(e)}
              >
                {value}
              </li>
            );
          })}
        </ul>
      </div>

    </fieldset>
  )
}

export { Input, InputSelect, InputSelectCustom };
