import { Box, Typography } from '@mui/material';
import Billpayment from '../../assets/Billpayment.svg'; // Adjust the path as per your file structure
import Buyairtime from "../../assets/Buyairtime.svg" 
import Mpesa from "../../assets/Mpesa.svg";
import Pesalink from "../../assets/Pesalink.svg"
import Beneficiary from "../../assets/Beneficiary.svg"
import Addaccount from "../../assets/Addaccount.svg"
function Services() {
  return (
    <Box sx={{marginTop:"20px",display:"flex",gap:"50px"}}>
      <Box sx={{backgroundColor:"white",width:"100px",height:"80px",borderRadius:"7px"}}>
        <Box sx={{marginLeft:"30px",marginTop:"5px"}}>
        <img src={Billpayment} alt="Bill Payment"  />
        </Box>
        <Typography sx={{marginLeft:"7px"}}>Bill Payment</Typography>
      </Box>
      <Box sx={{backgroundColor:"white",width:"100px",borderRadius:"7px"}}>
        <Box sx={{marginLeft:"30px",marginTop:"5px"}}>
        <img src={Buyairtime} alt="Bill Payment"  />
        </Box>
       
        <Typography sx={{marginLeft:"7px"}}>Buy airtime</Typography>
      </Box>
      <Box sx={{backgroundColor:"white",width:"100px",borderRadius:"7px"}}>
        <Box sx={{marginLeft:"30px",marginTop:"5px"}}>
        <img src={Mpesa} alt="Bill Payment"  />
        </Box>
       
        <Typography sx={{marginLeft:"7px"}}>MPESA</Typography>
      </Box>
      <Box sx={{backgroundColor:"white",width:"100px",borderRadius:"7px"}}>
        <Box sx={{marginLeft:"30px",marginTop:"5px"}}>
        <img src={Pesalink} alt="Bill Payment"  />
        </Box>
       
        <Typography sx={{marginLeft:"7px"}}>PESALINK</Typography>
      </Box>
      <Box sx={{backgroundColor:"#031F4F",width:"100px",borderRadius:"7px"}}>
        <Box sx={{marginLeft:"30px",marginTop:"5px"}}>
        <img src={Beneficiary} alt="Bill Payment"  />
        </Box>
       
        <Typography sx={{color:"white",marginLeft:"7px"}}>Beneficiary</Typography>
      </Box>
      <Box sx={{backgroundColor:"white",width:"100px",borderRadius:"7px"}}>
        <Box sx={{marginLeft:"30px",marginTop:"5px"}}>
        <img src={Addaccount} alt="Bill Payment"  />
        </Box>
       
        <Typography sx={{marginLeft:"7px"}}>Add Account</Typography>
      </Box>
    </Box>
  );
}

export default Services;
