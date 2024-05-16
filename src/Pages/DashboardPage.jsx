/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import MyAccount from 'src/components/MyAccount/MyAccount'
import { Box } from '@mui/material'
import Services from 'src/components/Services/Services'
import BottomCard from 'src/components/BottomCard/BottomCard'

const Dashboard = () => {
  return (
    <div>
      <Box>
          <Sidebar />
      </Box>
      <Box sx={{marginLeft:'300px'}}>
      <Services />
          </Box>
      <Box sx={{ marginLeft:'100px'}}>
      <MyAccount />
      <Box sx={{marginTop:'30px', marginBottom:'30px'}}>
          <BottomCard />
      </Box>
      </Box>
      <Footer />
    </div>
  )
}

export default Dashboard
