import { NavLink, Outlet } from "react-router";
import "./header.css";
function NavBar() {
  return (
    <div>
      <div className="header">
        <div>
          <NavLink className="link">
            <h2>Logo</h2>
          </NavLink>
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
              <NavLink
                className={({ isActive }) =>
                  isActive ? "custom-active link" : "link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/in/user/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/in/user/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/college">
                College
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/users">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/users/list">
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default NavBar;
