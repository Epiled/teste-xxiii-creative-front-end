import { Link } from 'react-router-dom';
import styles from './ProfilePicture.module.scss'
import IProfilePicture from '../../interfaces/IProfilePicture';
import { useContext } from "react";
import { ProfileImageContext } from '../../context/Context';

const ProfilePicture = ({ size = 'P' }: IProfilePicture) => {

  const { profileImg } = useContext(ProfileImageContext);

  return (
    <>
      <Link
        to={'/edit-profile'}
        className={`${styles.profilePicture} ${styles[`profilePicture--${size}`]}`}
      >
        <img
          className={styles.header__profileImg}
          src={profileImg || '/images/modelo-1.png'}
          alt='Abrir perfil de usuário'
        />
      </Link>
    </>
  )
}

export default ProfilePicture;
