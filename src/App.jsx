import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import College from "./College";
import Student from "./Student";
import Departments from "./Departments";
import CollegeDetails from "./CollegeDetails";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="in">
            <Route path="/in/user">
              <Route path="/in/user/about" element={<About />} />
              <Route path="/in/user/login" element={<Login />} />
            </Route>
          </Route>
        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="departments" element={<Departments />} />
          <Route path="collegeDetails" element={<CollegeDetails />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
