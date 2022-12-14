import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
