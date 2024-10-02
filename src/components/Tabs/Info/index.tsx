import { useContext, useRef } from 'react';
import options from '../../../mocks/infoOptions';
import { Button } from '../../Buttons';
import Option from '../../Option';
import ProfilePicture from '../../ProfilePicture';
import styles from './Info.module.scss';
import { ProfileImageContext } from '../../../context/Context';

const Info = () => {

  const { setProfileImg } = useContext(ProfileImageContext);
  const inputFileRef = useRef<HTMLInputElement | null>(null); // Referência para o input de arquivo

  const handleImageChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImg(reader.result as string); // Atualiza a imagem de perfil com a nova imagem
      };
      reader.readAsDataURL(file); // Lê a imagem como URL
    }
  });

  const handleButtonClick = () => {
    inputFileRef.current?.click(); // Simula o clique no input de arquivo
  };

  return (

    <div className={styles.info}>
      <input
        className={styles.info__ipt}
        ref={inputFileRef} // Associa a referência ao input de arquivo
        type="file"
        onChange={handleImageChange}
      />
      <aside className={styles.info__picture}>
        <ProfilePicture size='M' />
        <Button text='Profile Picture' onClick={handleButtonClick} />
      </aside>

      <main>
        {options.map((option, index) => {
          return (
            <Option key={option.type + index} {...option} />
          )
        })}
      </main>
    </div>
  )
}

export default Info;
