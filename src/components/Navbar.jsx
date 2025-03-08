import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        Task & Habit Tracker
      </Link>

     
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menú de navegación */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/tasks" onClick={() => setMenuOpen(false)}>Tareas</Link>
        </li>
        <li>
          <Link to="/habits" onClick={() => setMenuOpen(false)}>Hábitos</Link>
        </li>
        <li>
          <Link to="/stats" onClick={() => setMenuOpen(false)}>Estadísticas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;