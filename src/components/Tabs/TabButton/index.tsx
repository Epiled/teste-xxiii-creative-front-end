import styles from './TabButton.module.scss';

interface IProp {
  text: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabButton = ({text, activeTab, setActiveTab} : IProp) => {
  return (
    <button
      className={styles.tabButton}
      data-active={activeTab === text}
      onClick={() => setActiveTab(text)}
    >
      <span className={styles.tabButton__option}>
        {text}
      </span>
    </button>
  )
}

export default TabButton;
