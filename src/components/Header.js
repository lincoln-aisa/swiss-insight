
import { Link } from "react-router-dom";
import website_logo from './website_logo.png';

function Header() {
  return (
    <main className="App-header">
      <Link to="/">
        <div className="app-logo">
          <img src= {website_logo} alt="Website logo"/>
          <h1>Swiss Insight</h1>
        </div>
      </Link>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/about-us" className="nav-item">About</Link>
          </li>
          <li>
            <Link to="/contact-us" className="nav-item">Contact</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
export default Header;