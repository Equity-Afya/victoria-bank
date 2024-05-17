import Sidebar from '../components/Sidebar/Sidebar'
import Services from 'src/components/Services/Services'
import { Box } from '@mui/material'
import BottomCard from 'src/components/BottomCard/BottomCard'
import AddBeneficiaries from 'src/components/AddBeneficiaries/AddBeneficiaries'
import MyAccount from 'src/components/MyAccount/MyAccount'
import Footer from 'src/components/Footer/Footer'

function AddBeneficiariespage() {
  
  return (
    <Box >
      <Box sx={{display:"flex",marginTop:"160px"}}>
      <Box>
        <Sidebar/>
      </Box>
      <Box>
      <Box sx={{display:"flex"}}>
        <Box sx={{marginTop:"60px"}}>
        <MyAccount/>
       </Box>
       <Box>
       <Box sx={{marginTop:"120px",marginLeft:"30px"}}>
        <Services/>
       </Box>
       <Box sx={{marginTop:"30px",marginLeft:"10px"}}>
        <AddBeneficiaries/>
       </Box>
       </Box>
      </Box>
      <Box sx={{}}>
        <BottomCard/>
      </Box> <Box>
    <Footer/>
     </Box>

      </Box>
      </Box>
      
    
      
    </Box>
  )
}
export default AddBeneficiariespage
