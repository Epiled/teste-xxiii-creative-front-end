import { Link, useNavigate } from "react-router-dom"
import styles from "./PageTitles.module.scss"
import IPageTitle from "../../interfaces/IPageTitle";

const PageTitles = ({ title, url }: IPageTitle) => {

  const navigation = useNavigate();

  const handleBackClick = () => {
    // Verifica se há uma página anterior no histórico
    if(document.referrer && document.referrer !== window.location.href) {
      navigation(-1); // Volta à página anterior
    } else {
      navigation('/'); // Redireciona para a página inicial
    }
  };

  return (
    <div className={styles.pageTitles}>
      <button
        className={styles.pageTitles__back}
        onClick={handleBackClick}
      >
        <img
          className={styles.pageTitles__icon}
          src="/icons/chevron-left.svg"
          alt="Voltar à página anterior"
          width="24"
          height="24"
        />
      </button>
      <div>
        <h1 className={styles.pageTitles__title}>
          {title}
        </h1>
        <Link
          to={`/${url}`}
          className={styles.pageTitles__conf}
        >
          Configuration
        </Link>
      </div>
    </div>
  )
}

export default PageTitles;
