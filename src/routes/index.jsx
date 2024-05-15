import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from '../Pages/DashboardPage';

function AppRoutes () {
    return (
        <Router>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />   
            </Routes>
        </Router>
    )
}

export default AppRoutes