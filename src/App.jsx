import { Routes, Route, NavLink } from "react-router-dom";

import "./App.scss";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import LogoutButton from "./components/logout-button/LogoutButton";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>

            <li>
              <NavLink to='/dashboard'>Today</NavLink>
            </li>

          </ul>

          <LogoutButton>Log out</LogoutButton>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
