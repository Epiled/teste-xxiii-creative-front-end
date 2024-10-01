import { Button } from '../../components/Buttons';
import Header from '../../components/Header';
import PageTitles from '../../components/PageTitles';
import styles from './EditProfile.module.scss'

const EditProfile = () => {
  const title = 'Edit Profile';

  return (
    <>
      <Header />
      <PageTitles title={title} url='' />

      <main className={styles.editProfile}>
        <Button />
        <Button type={'reverse'} />
        <Button type={'gradient'} />
        <Button type={'blank'} />
      </main>

      <h1>
        Página Edit Profile
      </h1>
    </>
  )
}

export default EditProfile;
