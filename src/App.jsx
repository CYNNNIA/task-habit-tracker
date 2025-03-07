import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";
import HabitsPage from "./pages/HabitsPage";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics"; // Asegúrate de importar esto

function App() {
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