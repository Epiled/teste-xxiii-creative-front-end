import { Input, InputSelect } from '../../Input';
import styles from './Preference.module.scss';

const Preference = () => {
  return (
    <div className={styles.preference}>
      <Input id='nome' name='nome' label='Name' />
      <InputSelect
        id="languagem"
        label='Languagem'
        values={[
          'Brasil',
          'Japão',
          'Australia'
        ]}
      />
    </div>
  )
}

export default Preference;
