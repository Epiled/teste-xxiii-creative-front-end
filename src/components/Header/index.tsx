import ProfilePicture from '../ProfilePicture';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src='/icons/branding.svg'
        width='122'
        height='36'
        alt='Logo Roses'
      />
      <div className={styles.header__side}>
        <button className={styles.header__chatBtn} aria-label='Abrir Chat' />
        <ProfilePicture />
      </div>
    </header>
  )
}

export default Header;
