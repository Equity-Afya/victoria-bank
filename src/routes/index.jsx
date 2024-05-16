import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from '../Pages/DashboardPage';
import AddBeneficiariespage from "../Pages/AddBeneficiariespage";import LoginPage from "src/Pages/LoginPage";

function AppRoutes () {
    return (
        <Router>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/add-beneficiaries" element={<AddBeneficiariespage />} />   
                <Route path="/" element={<LoginPage />} />  
  
            </Routes>
        </Router>
    )
}

export default AppRoutes