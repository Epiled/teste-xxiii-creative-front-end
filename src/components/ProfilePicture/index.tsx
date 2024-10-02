import { Link } from "react-router-dom";
import styles from "./ProfilePicture.module.scss"
import IProfilePicture from "../../interfaces/IProfilePicture";

const ProfilePicture = ({size = 'P'}: IProfilePicture) => {
  return (
    <Link
      to={'/edit-profile'}
      className={`
        ${styles.profilePicture} 
        ${styles[`profilePicture--${size}`]}
        `}
    >
      <img
        className={styles.header__profileImg}
        src='/images/modelo-1.png'
        alt='Abrir perfil de usuário'
      />
    </Link>
  )
}

export default ProfilePicture;
