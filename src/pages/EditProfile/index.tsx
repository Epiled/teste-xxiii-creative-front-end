import Header from "../../components/Header";
import PageTitles from "../../components/PageTitles";
import Tabs from "../../components/Tabs";

const EditProfile = () => {
  const title = 'Edit Profile';

  return (
    <>
      <Header />
      <PageTitles title={title} url='' />
      <Tabs />
      <h1>
        Página Edit Profile
      </h1>
    </>
  )
}

export default EditProfile;
