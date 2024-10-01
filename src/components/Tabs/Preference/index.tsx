import options from '../../../mocks/preferenceOptions';
import AllowRequests from '../../AllowRequests';
import { Button } from '../../Buttons';
import { InputSelectCustom } from '../../Input';
import Option from '../../Option';
import styles from './Preference.module.scss';

const Preference = () => {
  return (
    <div className={styles.preference}>

      <InputSelectCustom
        id="location"
        label="Location"
        values={[
          'Brasil',
          'Japão',
          'Australia'
        ]}
        icon='airplane'
        disabled
      />

      <InputSelectCustom
        id="languagem"
        label="Languagem"
        values={[
          'Brasil',
          'Japão',
          'Australia'
        ]}
        icon='languagem'
      />

      <div>
        {options.map((option, index) => {
          return (
            <Option key={index} {...option} />
          )
        })}
      </div>

      <Button text='Add Content' />

      <AllowRequests />
    </div>
  )
}

export default Preference;
