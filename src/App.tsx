import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./pages/Info";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" index element={<Info />} />
          <Route path='*' element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
