import '../../styles/global.scss';
import Header from "../../components/Header";
import ProfilePicture from '../../components/ProfilePicture';

const Info = () => {
  return (
    <>
      <Header />
      <h1>
        Página Info
      </h1>
      <ProfilePicture size='M' />
    </>
  )
}

export default Info;
