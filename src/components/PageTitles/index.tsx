import { Link, useNavigate } from "react-router-dom"
import styles from "./PageTitles.module.scss"

interface IProp {
  title: string;
  url: string;
}

const PageTitles = ({ title, url }: IProp) => {

  const navigation = useNavigate();

  return (
    <div className={styles.pageTitles}>
      <button
        className={styles.pageTitles__back}
        title="Back"
        onClick={() => {
          navigation(-1); // Volta à página anterior
        }}
      >
        <img
          className={styles.pageTitles__icon}
          src="/icons/chevron-left.svg"
          alt=""
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
