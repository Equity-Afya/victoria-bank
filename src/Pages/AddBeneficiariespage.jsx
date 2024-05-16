
import AddBeneficiaries from '../components/AddBeneficiaries/AddBeneficiaries'
import Services from '../components/Services/Services'
import Sidebar from '../components/Sidebar/Sidebar'
import { Box } from '@mui/material'
import { useMediaQuery } from '@mui/material';


function AddBeneficiariespage() {
  const isMobile = useMediaQuery('(max-width: 2000px)');
  return (
    <Box sx={{height:"100vh", flexDirection: isMobile ? "column" : "row",paddingLeft:"48px"}}>
        <Box sx={{display:"flex"}}>
        <Box>
      <Sidebar />
      </Box>
        <Box>
        <Box  sx={{marginTop:"130px",marginLeft:"290px"}}>
        <Services/>
      </Box>
      <Box  sx={{marginTop:"15px",marginLeft:"275px"}} >
       <AddBeneficiaries/>
      </Box>
        </Box>
        </Box>
       
     
    </Box>
  )
}
export default AddBeneficiariespage
