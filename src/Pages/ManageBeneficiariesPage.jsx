
import Sidebar from '../components/Sidebar/Sidebar'
import ManageBeneficiaries from '../components/ManageBeneficiaries/ManageBeneficiaries'
import MyAccount from '../components/MyAccount/MyAccount'
import { Box } from '@mui/material'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const ManageBeneficiariesPage = () => {
  return (
 
     <Box sx={{ minHeight: "100vh", width: "100vw",backgroundColor:"whitesmoke"}}>

      <Box sx={{}}>
      <Sidebar />
      </Box>
<Box>
      <Header/>
    </Box>
      
      <Box sx={{ flexGrow: 1, marginTop: "45px", flexDirection: 'column',marginLeft:"0px"}}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <MyAccount />
          </Box>
          <Box sx={{ marginTop: "40px", marginLeft: "5px" }}>
            <Box sx={{height:"10px",marginTop:"20px"}}>
            <ManageBeneficiaries/>
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

export default ManageBeneficiariesPage
