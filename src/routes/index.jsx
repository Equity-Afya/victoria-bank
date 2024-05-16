import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "../Pages/DashboardPage";
import LoginPage from "src/Pages/LoginPage";
import Login from "src/Pages/Login/Login";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
