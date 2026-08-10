import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import MissionPage from "./pages/MissionPage";

function App() {
  return (
    <BrowserRouter basename="/react-hooks-quest">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission/:id" element={<MissionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
