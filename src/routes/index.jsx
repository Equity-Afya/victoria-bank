import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from '../Pages/DashboardPage';
import LoginPage from "src/Pages/LoginPage"
import OTPPage from "src/Pages/OTP-Page/OTPPage";
function AppRoutes () {
    return (
        <Router>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/" element={<LoginPage />} /> 
                <Route path="/otp" element={<OTPPage />} /> 
            </Routes>
        </Router>
    )
}

export default AppRoutes