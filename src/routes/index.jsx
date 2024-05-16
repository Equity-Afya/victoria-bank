import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "../Pages/DashboardPage";
import LoginPage from "src/Pages/LoginPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
