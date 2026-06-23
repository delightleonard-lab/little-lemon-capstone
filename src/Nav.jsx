import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // Confirm this file name matches your sidebar exactly

function Nav() {
  return (
    <nav className="nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 10%', background: '#FFFFFF' }}>
      {/* Exactly one logo wrapper with restricted constraints */}
      <div className="logo-container">
        <Link to="/">
          <img
            src={logo}
            alt="Little Lemon Logo"
            style={{ height: '50px', width: 'auto', display: 'block' }}
          />
        </Link>
      </div>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#495E57', fontWeight: 'bold' }}>Home</Link></li>
        <li><Link to="/reservations" style={{ textDecoration: 'none', color: '#495E57', fontWeight: 'bold' }}>Reservations</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;