import options from '../../../mocks/infoOptions';
import { Button } from '../../Buttons';
import Option from '../../Option';
import ProfilePicture from '../../ProfilePicture';
import styles from './Info.module.scss';

const Info = () => {

  return (
    <div className={styles.info}>
      <aside className={styles.info__picture}>
        <ProfilePicture size='M' />
        <Button text='Profile Picture' />
      </aside>

      <main>
        {options.map((option, index) => {
          return (
            <Option key={option.type+index} {...option} />
          )
        })}
      </main>
    </div>
  )
}

export default Info;
