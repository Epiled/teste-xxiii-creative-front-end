import languagens from '../../../mocks/mockup-languagens';
import options from '../../../mocks/mockup-preference-options';
import locations from '../../../mocks/mockupt-locations';
import AllowRequests from '../../AllowRequests';
import { Button } from '../../Buttons';
import Option from '../../Option';
import Select from '../../Select';
import styles from './Preference.module.scss';

const Preference = () => {
  return (
    <div className={styles.preference}>
      
      <Select
        id="location"
        label="Location"
        values={locations}
        icon='airplane'
        disabled
      />

      <Select
        id="languagem"
        label="Languagem"
        values={languagens}
        icon='languagem'
      />

      <div>
        {options.map((option, index) => {
          return (
            <Option key={option.type+index} {...option} />
          )
        })}
      </div>

      <Button text='Add Content' />

      <AllowRequests />
    </div>
  )
}

export default Preference;
