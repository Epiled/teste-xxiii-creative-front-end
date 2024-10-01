import styles from './Input.module.scss';

interface IProp {
  id: string;
  label: string;
  name: string;
  tipo?: string;
}

interface ISelect extends Omit<IProp, 'name'> {
  values: string[];
}

const Input = ({ id, label, name, tipo = 'text' }: IProp) => {
  return (
    <fieldset className={styles.input}>
      <label
        className={styles.input__label}
        htmlFor={id}
      >
        {label}
        <input
          className={styles.input__ipt}
          id={id}
          name={name}
          type={tipo}
        />
      </label>
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
