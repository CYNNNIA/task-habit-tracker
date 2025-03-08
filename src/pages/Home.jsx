import { Link } from "react-router-dom";
import "../styles/home.css"; 
const Home = () => {
  return (
    <div className="home-container">
      <h1>¡Bienvenido a Task Habit Tracker! 📅</h1>
      <p>Administra tus tareas y hábitos de manera eficiente.</p>
      <Link to="/tasks" className="home-button">Ver Tareas</Link>
      <Link to="/habits" className="home-button">Ver Hábitos</Link>
      <Link to="/stats" className="home-button">Ver Estadisticas</Link>
     
      
    </div>
  );
};

export default Home;