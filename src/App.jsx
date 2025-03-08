import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";
import HabitsPage from "./pages/HabitsPage";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";

function App() {
  const location = useLocation();

  useEffect(() => {
  
    document.body.classList.remove("no-scroll");

    
    if (location.pathname === "/stats" || location.pathname === "/") {
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
        <Route path="/stats" element={<Statistics />} />
      </Routes>
    </>
  );
}

export default App;