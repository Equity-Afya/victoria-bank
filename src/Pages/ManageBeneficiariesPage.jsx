
import Sidebar from '../components/Sidebar/Sidebar'
import ManageBeneficiaries from '../components/ManageBeneficiaries/ManageBeneficiaries'
import MyAccount from '../components/MyAccount/MyAccount'
import { Box } from '@mui/material'
import Footer from '../components/Footer/Footer'
import BottomCard from '../components/BottomCard/BottomCard'
import Header from '../components/Header/Header'

const ManageBeneficiariesPage = () => {
  return (
 
    <Box sx={{ minHeight: "100vh", width: "100vw", display: 'flex',backgroundColor:"whitesmoke"}}>
    <Box sx={{}}>
    <Sidebar />
    </Box>
<Box>
    <Header/>
  </Box>
    
    <Box sx={{ flexGrow: 1, marginTop: "45px", flexDirection: 'column',position:"fixed",marginLeft:"100px"}}>
      <Box sx={{ display: "flex" }}>
        <Box>
          <MyAccount />
        </Box>
        <Box sx={{ marginLeft: "10px" }}>
          <Box>
            <ManageBeneficiaries/>
          </Box>
        </Box>
      </Box>
      <Box sx={{}}>
        <BottomCard />
      </Box>
      <Footer />
    </Box>
  </Box>
  )
}

export default ManageBeneficiariesPage
