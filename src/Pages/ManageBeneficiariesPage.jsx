
import Sidebar from '../components/Sidebar/Sidebar'
import ManageBeneficiaries from '../components/ManageBeneficiaries/ManageBeneficiaries'
import MyAccount from 'src/components/MyAccount/MyAccount'
import { Box } from '@mui/material'
import Footer from 'src/components/Footer/Footer'
import BottomCard from 'src/components/BottomCard/BottomCard'

const ManageBeneficiariesPage = () => {
  return (
  
    <Box  sx={{display: 'flex', marginLeft: '50px'}}>
      <Box>
      <Sidebar/>
      </Box>
      <Box>
        <Box sx={{display: 'flex'}}>
        <MyAccount/>
        <Box sx={{marginLeft: '20px', marginTop: '50px'}}>
        <ManageBeneficiaries/>
        </Box>
        </Box>
      <BottomCard/>
       <Footer/>
      </Box>
      
    </Box>
  
  )
}

export default ManageBeneficiariesPage
