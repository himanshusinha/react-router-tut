import { Link } from "react-router";
import "./header.css";
function NavBar() {
  return (
    <div className="header">
      <div>
        <Link className="link">
          <h2>Logo</h2>
        </Link>
      </div>
      <div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 10,
            width: "300px",
            justifyContent: "space-between",
          }}
        >
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default NavBar;
