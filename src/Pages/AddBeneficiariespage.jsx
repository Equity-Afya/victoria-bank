
import AddBeneficiaries from '../components/AddBeneficiaries/AddBeneficiaries'
import Services from '../components/Services/Services'
import Sidebar from '../components/Sidebar/Sidebar'
import { Box } from '@mui/material'

function AddBeneficiariespage() {
  return (
    <Box sx={{backgroundColor: "whitesmoke",height:"100vh"}}>
        <Box sx={{display:"flex"}}>
        <Box>
      <Sidebar />
      </Box>
        <Box>
        <Box  sx={{marginTop:"80px",marginLeft:"290px"}}>
        <Services/>
      </Box>
      <Box  sx={{marginTop:"40px",marginLeft:"275px"}} >
       <AddBeneficiaries/>
      </Box>
        </Box>
        </Box>
       
     
    </Box>
  )
}
export default AddBeneficiariespage
