import { Link } from 'react-router';

function Navbar() {
  return (
    <nav>
      <h2>Dog Explorer</h2>
      <Link to="/">Home </Link>
      <Link to="/breeds">Breeds </Link>
      <hr />
    </nav>
  );
}

export default Navbar;
