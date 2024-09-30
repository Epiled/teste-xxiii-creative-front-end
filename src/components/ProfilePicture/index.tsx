import { Link } from "react-router-dom";
import styles from "./ProfilePicture.module.scss"

interface IProp {
  size?: 'P' | 'M'
}

const ProfilePicture = ({size = 'P'}: IProp) => {
  return (
    <Link
      to={'/'}
      className={`
        ${styles.ProfilePicture} 
        ${styles[`ProfilePicture--${size}`]}
        `}
    >
      <img
        className={styles.header__profileImg}
        src='/images/modelo-1.png'
        alt='Abrir Perfil'
      />
    </Link>
  )
}

export default ProfilePicture;
