import { Button } from '../../components/Buttons';
import { Input } from '../../components/Input';
import PageTitles from '../../components/PageTitles';
import styles from './EditProfile.module.scss'

const EditProfile = () => {
  const title = 'Edit Profile';

  return (
    <>
      <PageTitles title={title} url='' />

      <main className={styles.editProfile}>

        <div className={styles.editProfile__ipts}>
          <Input
            id='nome'
            label='Name'
            name='nome'
            tipe="Dica Lorem Impsum"
            value='Scarlet'
          />

          <div>
            <Input
              id='username'
              label='Username'
              name='username'
              tipe="Dica Lorem Impsum"
              value='scarlet.roses'
            />
            <span className={styles.editProfile__txt}>
              In most cases, you’ll be able to change your name back to <span className={styles[`editProfile__txt--desc`]}>scarlet.roses</span> for another 14 days.
            </span>
          </div>
        </div>

        <div className={styles.editProfile__preview}>
          <div className={styles.editProfile__top}>
            <h3 className={styles.editProfile__title}>Profile</h3>
            <div className={styles.editProfile__tipe}>
              <img className={styles.editProfile__iconTipe} src='/icons/info.png' />
              <span className={styles.editProfile__previewtxt}>Lorem Impsum</span>
            </div>
          </div>
          <a href="" className={styles.editProfile__url}>
            https://roses.vip/<span className={styles[`editProfile__url--desc`]}>scarlet.roses</span>
          </a>
        </div>

        <div className={styles.editProfile__notification}>
          <span>
            <h3>Identity Verification</h3>
            <img src="/icons/check-black.png" alt="" width={24} height={24} />
          </span>
          <p>Let’s make sure nobody is trying to impersonate you.</p>
          <Button text={'Verify Account'} type={'reverse'} />
        </div>

        <div className={styles.editProfile__btns}>
          <Button text={'Done'} type={'gradient'} />
          <Button text={'Cancel'} type={'blank'} />
        </div>
      </main>
    </>
  )
}

export default EditProfile;
