import '../../styles/global.scss';
import Header from "../../components/Header";
import PageTitles from '../../components/PageTitles';
import Tabs from '../../components/Tabs';

const Info = () => {
  const title = 'Profile';

  return (
    <>
      <Header />
      <PageTitles title={title} url='' />
      <Tabs />
    </>
  )
}

export default Info;
