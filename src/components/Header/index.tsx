import ProfilePicture from '../ProfilePicture';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src='/images/branding.png'
        width='122'
        height='36'
        alt='Logo Roses'
      />
      <div className={styles.header__side}>
        <img
          className={styles.header__icon}
          src='/icons/chat.png'
          alt='Abrir Chat'
        />
      <ProfilePicture />
      </div>
    </header>
  )
}

export default Header;
