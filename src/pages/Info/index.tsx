import '../../styles/global.scss';
import Header from "../../components/Header";
import PageTitles from '../../components/PageTitles';

const Info = () => {
  const title = 'Profile';

  return (
    <>
      <Header />
      <PageTitles title={title} url='' />
      <h1>
        Página Info
      </h1>
    </>
  )
}

export default Info;
