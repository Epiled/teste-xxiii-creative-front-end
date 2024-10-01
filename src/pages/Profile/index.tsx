import '../../styles/global.scss';
import PageTitles from '../../components/PageTitles';
import Tabs from '../../components/Tabs';

const Profile = () => {
  const title = 'Profile';

  return (
    <>
      <PageTitles title={title} url='' />
      <Tabs />
    </>
  )
}

export default Profile;
