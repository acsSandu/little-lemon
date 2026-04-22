import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const NAV_LINKS: { label: string; to: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '#' },
  { label: 'Menu', to: '#' },
  { label: 'Reservations', to: '/booking' },
  { label: 'Order Online', to: '#' },
  { label: 'Login', to: '#' },
];

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__container">
        <Link to="/">
          <img src={logo} alt="Little Lemon" className="navbar__logo" />
        </Link>
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
