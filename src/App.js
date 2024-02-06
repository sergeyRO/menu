import "./App.css";
import "./main.css";
import "./components/Menu/menu.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import HomePage from "./components/Pages/HomePage";
import DriftPage from "./components/Pages/DriftPage";
import TimeAttackPage from "./components/Pages/TimeAttackPage";
import ForzaPage from "./components/Pages/ForzaPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Menu />
        <div className="page">
          <Routes>
            <Route exact path="/ra-router-menu" element={<HomePage />} />
            <Route path="/ra-router-menu/drift" element={<DriftPage />} />
            <Route path="/ra-router-menu/timeattack" element={<TimeAttackPage />}/>
            <Route path="/ra-router-menu/forza" element={<ForzaPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
