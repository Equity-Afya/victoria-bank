
import AddBeneficiaries from '../components/AddBeneficiaries/AddBeneficiaries'
import Services from '../components/Services/Services'
import Sidebar from '../components/Sidebar/Sidebar'
import { Box } from '@mui/material'
import { useMediaQuery } from '@mui/material';


function AddBeneficiariespage() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Box sx={{height:"100vh", flexDirection: isMobile ? "column" : "row"}}>
        <Box sx={{display:"flex"}}>
        <Box>
      <Sidebar />
      </Box>
        <Box>
        <Box  sx={{marginTop:"130px",marginLeft:"334px"}}>
        <Services/>
      </Box>
      <Box  sx={{marginTop:"15px",marginLeft:"320px"}} >
       <AddBeneficiaries/>
      </Box>
        </Box>
        </Box>
       
     
    </Box>
  )
}
export default AddBeneficiariespage
