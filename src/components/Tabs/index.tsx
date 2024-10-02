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
      <nav className={styles.tabs__navigation} role="tablist">

        <TabButton text='Info' activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton text='Photos' activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabButton text='Preference' activeTab={activeTab} setActiveTab={setActiveTab} />

      </nav>

      {activeTab === 'Info' && <Info />}
      {activeTab === 'Photos' && <Photo />}
      {activeTab === 'Preference' && <Preference />}
    </main>
  )
}

export default Tabs;
