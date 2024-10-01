import { useEffect, useState } from 'react';
import styles from './Tabs.module.scss';
import TabButton from './TabButton';
import Info from './Info';
import Photo from './Photo';
import Preference from './Preference';

const Tabs = () => {

  const [activeTab, setActiveTab] = useState('Info');

  useEffect(() => {
    console.log(activeTab)
  }, [activeTab])

  return (
    <main className={styles.tabs}>
      <nav className={styles.tabs__navigation}>

        <TabButton text='Info' activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton text='Photos' activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton text='Preference' activeTab={activeTab} setActiveTab={setActiveTab} />

      </nav>

      {/* <div className={styles.tabs__container}> */}
        {activeTab === 'Info' && <Info />}
        {activeTab === 'Photos' && <Photo />}
        {activeTab === 'Preference' && <Preference />}
      {/* </div> */}
    </main>
  )
}

export default Tabs;
