import { Outlet } from "react-router";
import { Link, NavLink } from "react-router";

function College() {
  return (
    <div className="college" style={{ textAlign: "center" }}>
      <h1>College Page</h1>
      <h3>
        <Link to="/">Go back to home</Link>
      </h3>
      <NavLink className="link" to="">
        Student
      </NavLink>
      <NavLink className="link" to="departments">
        Departments
      </NavLink>
      <NavLink className="link" to="collegeDetails">
        College Details
      </NavLink>

      <Outlet />
    </div>
  );
}
export default College;
