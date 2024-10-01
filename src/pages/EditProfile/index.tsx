import Header from "../../components/Header";
import PageTitles from "../../components/PageTitles";

const EditProfile = () => {
  const title = 'Edit Profile';

  return (
    <>
      <Header />
      <PageTitles title={title} url='' />

      <h1>
        Página Edit Profile
      </h1>
    </>
  )
}

export default EditProfile;
