
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App-header">
      <div className="app-logo">
        <p>Logo placeholder text</p>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;