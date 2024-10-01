import { Outlet } from "react-router-dom"
import styles from './DefaultWrapper.module.scss'
import Header from "../Header";

const DefaultWrapper = () => {
  return (
    <div className={styles.defaultWrapper}>
      <Header />
      <Outlet />
    </div>
  )
}

export default DefaultWrapper;
