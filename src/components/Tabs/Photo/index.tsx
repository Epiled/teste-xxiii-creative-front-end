import styles from './Photo.module.scss';
import photos from '../../../mocks/mockup-photos-gallery';
import { useRef, useState } from 'react';

const Photo = () => {
  // Sempre gera 9 campos de imagem
  const galeria = Array.from({ length: 9 }, (_, index) => (
    <picture
      key={index}
      ref={(el: HTMLPictureElement | null) => listPictures.current[index] = el}  // Associa o ref ao elemento
      className={styles.photo__box}
      onClick={() => handleSelectImage(index)}
    >
      <img
        className={styles.photo__img}
        src={`/images/${photos[index] ? photos[index].foto : 'not-image.png'}`}
        alt={`${photos[index] ? photos[index].desc : ''}`}
      />
      {index === 0 && <button className={styles.photo__btn}>Cover</button>}
    </picture>
  ))

  // Refs
  const iptFile = useRef<HTMLInputElement>(null);
  const listPictures = useRef<(HTMLPictureElement | null)[]>([]);
  const [selectRef, setSelectedRef] = useState<HTMLPictureElement | null>();

  // Seleciona a imagem clicada e aciona o input
  const handleSelectImage = ((index: number) => {
    setSelectedRef(listPictures.current[index]);
    iptFile.current?.click();
  })

  // Aletra a imagem da galeria
  const handleImageChange = ((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (selectRef) {
          const imgElement = selectRef.querySelector('img');
          if (imgElement) {
            imgElement.src = reader.result as string;
          }
        }
      };
      reader.readAsDataURL(file); // Lê a imagem como URL
    }
    // Resetando o valor do input para permitir o mesmo arquivo ser selecionado novamente
    if (iptFile.current) {
      iptFile.current.value = '';
    }
  });

  return (
    <div className={styles.photo}>
      <input
        className={styles.photo__ipt}
        type="file"
        onChange={handleImageChange}
        ref={iptFile}
      />
      {galeria}
    </div>
  )
}

export default Photo;
