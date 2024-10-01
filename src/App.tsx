import './styles/global.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./pages/Info";
import EditProfile from "./pages/EditProfile";
import Photos from "./pages/Photos";
import Preference from "./pages/Preference";
import NotFound from "./pages/NotFound";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" index element={<Info />} />
          <Route path="edit-profile" index element={<EditProfile />} />
          <Route path="photos" index element={<Photos />} />
          <Route path="preference" index element={<Preference />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
