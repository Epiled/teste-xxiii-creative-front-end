import { Link } from 'react-router-dom';
import styles from './ProfilePicture.module.scss'
import IProfilePicture from '../../interfaces/IProfilePicture';
import { useState } from "react";

const ProfilePicture = ({ size = 'P' }: IProfilePicture) => {

  const [imageProfile, setImageProfile] = useState<string | undefined>(undefined);

  // const handleImageChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if(file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImageProfile(reader.result as string); // Atualiza a imagem de perfil com a nova imagem
  //     };
  //     reader.readAsDataURL(file); // Lê a imagem como URL
  //   }
  // });

  return (
    <>      
    
    {/* <input
    type="file"
    onChange={handleImageChange}
    name=""
    id=""
  /> */}
{/* 
  <label htmlFor="file-upload" className={styles.uploadLabel}>
    Trocar Imagem
  </label> */}
    <Link
      to={'/edit-profile'}
      className={`${styles.profilePicture} ${styles[`profilePicture--${size}`]}`}
    >

      <img
        className={styles.header__profileImg}
        src={imageProfile || '/images/modelo-1.png'}
        alt='Abrir perfil de usuário'
      />


    </Link>
    </>
  )
}

export default ProfilePicture;
