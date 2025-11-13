import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import College from "./College";
import Student from "./Student";
import Departments from "./Departments";
import CollegeDetails from "./CollegeDetails";
// import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/*" element={<PageNotFound />} /> */}
        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="departments" element={<Departments />} />
          <Route path="collegeDetails" element={<CollegeDetails />} />
        </Route>
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
