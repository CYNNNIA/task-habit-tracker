import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";
import HabitsPage from "./pages/HabitsPage";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics"; // Asegúrate de importar esto

function App() {
  const location = useLocation();

  useEffect(() => {
    // Elimina la clase al cambiar de página
    document.body.classList.remove("no-scroll");

    // Si estamos en la ruta de estadísticas, bloquear scroll
    if (location.pathname === "/stats") {
      document.body.classList.add("no-scroll");
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/habits" element={<HabitsPage />} />
        <Route path="/stats" element={<Statistics />} /> {/* Ruta corregida */}
      </Routes>
    </>
  );
}

export default App;