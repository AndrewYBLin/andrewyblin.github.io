import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        Portfolio
      </div>
      <div className="nav-links">
        {/* end prop prevents matching sub-routes inaccurately */}
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/projects">
          Projects & Experience
        </NavLink>
      </div>
    </nav>
  );
}