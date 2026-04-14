import './Navbar.css';
import logo from '../../assets/logo.svg';

const NAV_LINKS = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src={logo} alt="Little Lemon" className="navbar__logo" />
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;