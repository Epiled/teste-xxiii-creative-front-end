import options from '../../../mocks/infoOptions';
import Option from '../../Option';
import styles from './Info.module.scss';

const Info = () => {

  return (
    <div className={styles.info}>
      {options.map((option, index) => {
        return (
          <Option key={index} {...option} />
        )
      })}
    </div>
  )
}

export default Info;
