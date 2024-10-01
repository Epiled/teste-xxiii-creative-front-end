import { useState } from 'react';
import styles from './AllowRequests.module.scss'

const AllowRequests = () => {

  const [isChecked, setIsChecked] = useState(true);

  const handleSwitchChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={styles.allowRequests}>
      <img className={styles.allowRequests__icon} src="/icons/rose-gray.png" alt="" width={40} height={40} />

      <div>
        <h3 className={styles.allowRequests__title}>
          Allow Requests
        </h3>
        <p className={styles.allowRequests__txt}>
          Accept roses requests from everyone
        </p>
      </div>

      <label
        className={styles.allowRequests__label}
      >
        <input
          className={styles.allowRequests__ipt}
          type="checkbox"
          checked={isChecked}
          onChange={handleSwitchChange}
        />
        <span className={`
          ${styles.allowRequests__bolinha}
          ${!isChecked ? styles[`allowRequests__bolinha--active`] : ''}
          `}></span>
      </label>
    </div>

  )
}

export default AllowRequests;
