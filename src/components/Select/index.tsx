import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';
import ISelect from '../../interfaces/ISelect';

const Select = ({ id, label, values, icon, disabled }: ISelect) => {

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Brasil");
  const [isDisabled] = useState(disabled || false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref para o dropdown

  const handleActive = () => {
    if (!isDisabled) setIsActive((prev) => !prev);
  }

  const handleSelected = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const value = e.currentTarget.dataset.value;
    if (value) setSelected(value);
    handleActive();
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsActive(false); // Fecha o dropdown se o clique estiver fora
    }
  }

  useEffect(() => {
    // Adiciona o evento de clique global
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove o evento ao desmontar o componente
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, []);

  return (
    <fieldset
      className={`
        ${styles.select}
        ${isDisabled && styles[`select--disabled`]}`}
    >
      <label
        className={styles.select__label}
        htmlFor={id}
      >
        {label}
      </label>

      <div className={styles.select__wrapper} ref={dropdownRef}>
        <button
          className={styles.select__selected}
          disabled={isDisabled}
          aria-expanded={isActive} // Indica se o menu está expandido
          aria-controls="dropdown-list" // Associa o botão com a lista
          onClick={handleActive}
        >
          {icon && <img src={`/icons/${icon}.png`} className={styles.select__icon} />}
          {selected}
          <img
            src="/icons/chevron-left.png"
            alt=""
            className={`
              ${styles.select__icon}
              ${styles[`select__icon--arrow`]}
              ${isActive && styles[`select__icon--active`]}`}
          />
        </button>
        <ul
          id="dropdown-list"
          className={`
            ${styles.select__list}
            ${isActive && styles[`select__list--active`]}`}
          role="listbox"
          aria-labelledby={id}
        >
          {values.map((value, index) => {
            return (
              <li
                key={value+index}
                className={styles.select__item}
                data-value={value}
                role="option"
                aria-selected={selected === value}
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

export default Select;
