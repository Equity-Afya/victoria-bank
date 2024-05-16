import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DashboardPage from "../Pages/DashboardPage";
import ManageBeneficiariesPage from "../Pages/ManageBeneficiariesPage";
import AddBeneficiariespage from "../Pages/AddBeneficiariespage";
import Login from "src/Pages/Login/Login";
import OTPPage from "src/Pages/OTP-Page/OTPPage";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/ManageBeneficiaries"
          element={<ManageBeneficiariesPage />}
        />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/add-beneficiaries" element={<AddBeneficiariespage />} />
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTPPage />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
