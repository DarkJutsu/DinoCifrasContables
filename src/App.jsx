import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/404/NotFoundPage";
import { Header } from "./pages/menu/Header";
import { ActivosForm } from "./components/forms/ActivosForm";
import { DepreLineal } from "./components/DepreLineal";
import { DepreUso } from "./components/DepreUso";
import { DepreAcelDecre } from "./components/DepreAcelDecre";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<ActivosForm />} />
        <Route path="/lineal" element={<DepreLineal />} />
        <Route path="/uso" element={<DepreUso />} />
        <Route path="/acelerada" element={<DepreAcelDecre />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
