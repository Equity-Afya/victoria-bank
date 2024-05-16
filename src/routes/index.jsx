import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from '../Pages/DashboardPage';
import ManageBeneficiariesPage from "../Pages/ManageBeneficiariesPage";

function AppRoutes () {
    return (
        <Router>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />   
              <Route path="/ManageBeneficiaries" element={<ManageBeneficiariesPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes