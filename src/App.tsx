import './styles/resetCSS.scss';
import './styles/global.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import Profile from './pages/Profile';
import NotFound from "./pages/NotFound";
import DefaultWrapper from './components/DefaultWrapper';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultWrapper />}>
          <Route index element={<Profile />} />
          <Route path="edit-profile" index element={<EditProfile />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
