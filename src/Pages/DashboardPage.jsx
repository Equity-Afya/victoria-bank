import Sidebar from '../components/Sidebar/Sidebar'
import Services from '../components/Services/Services'
import { Box } from '@mui/material'


import MyAccount from '../components/MyAccount/MyAccount'
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header"

import RecentTransactions from '../components/RecentTransactions/RecentTransactions'
//import RecentTransactions from "../components/RecentTransactions/RecentTransactions"

function DashboardPage() {
  
  return (
    <Box sx={{ minHeight: "100vh", width: "100vw",backgroundColor:"whitesmoke"}}>

      <Box sx={{}}>
      <Sidebar />
      </Box>
<Box>
      <Header/>
    </Box>
      
      <Box sx={{ flexGrow: 1, marginTop: "0px", flexDirection: 'column',marginLeft:"100px"}}>
        <Box sx={{ display: "flex" }}>
          <Box >
            <MyAccount />
          </Box>
          <Box sx={{ marginTop: "0px", marginLeft: "35px" }}>
            <Box sx={{ marginLeft: "20px"}}>
              <Services />
            </Box>
            <Box sx={{height:"10px",marginTop:"10px"}}>
            <RecentTransactions/>
            </Box>
          </Box>
        </Box>
        <Box sx={{}}>
          
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}
export default DashboardPage
