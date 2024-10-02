import ITabButton from '../../../interfaces/ITabButton';
import styles from './TabButton.module.scss';

const TabButton = ({text, activeTab, setActiveTab} : ITabButton) => {
  return (
    <button
      className={styles.tabButton}
      data-active={activeTab === text}
      aria-selected={activeTab === text}
      onClick={() => setActiveTab(text)}
      type='button'
      role='tab'
    >
      <span className={styles.tabButton__option}>
        {text}
      </span>
    </button>
  )
}

export default TabButton;
