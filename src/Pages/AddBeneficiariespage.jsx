import Sidebar from '../components/Sidebar/Sidebar'
import Services from '../components/Services/Services'
import { Box } from '@mui/material'
import AddBeneficiaries from '../components/AddBeneficiaries/AddBeneficiaries'
import MyAccount from '../components/MyAccount/MyAccount'
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header"

function AddBeneficiariespage() {
  
  return (
    <Box sx={{ minHeight: "100vh", width: "100vw", display: 'flex',backgroundColor:"whitesmoke"}}>

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
          <Box sx={{ marginTop: "40px", marginLeft: "20px" }}>
            <Box sx={{ marginLeft: "20px"}}>
              <Services />
            </Box>
            <Box sx={{height:"10px",marginTop:"20px"}}>
            <AddBeneficiaries/>
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
export default AddBeneficiariespage
