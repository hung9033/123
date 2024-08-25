import { Link, Route, Routes, useRoutes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from 'react-toastify'
import LayoutAdmin from "./LayOut/LayoutAdmin";
import Add from "./pages/Add";
import List from "./pages/List";
import Edit from "./pages/Edit";
function App() {
  // const routes = useRoutes([]);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Thi WEB209
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ gap: 3, fontSize: 20 }}
            >
              <li className="nav-item">
                <Link className="nav-link active" to="register" >
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="add">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="list">
                  List Product
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-danger">Logout</button>
        </div>
      </nav>
      {/* <div className="container">{routes}</div> */}

      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route path="add" element={<Add />} />
          <Route path="list" element={<List />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;