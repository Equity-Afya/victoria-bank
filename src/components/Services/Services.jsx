import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Billpayment from '../../assets/Billpayment.svg'; // Adjust the path as per your file structure
import Buyairtime from "../../assets/Buyairtime.svg" 
import Mpesa from "../../assets/Mpesa.svg";
import Pesalink from "../../assets/Pesalink.svg"
import Beneficiary from "../../assets/Beneficiary.svg"
import Addaccount from "../../assets/Addaccount.svg"

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <Box sx={{display:"flex",gap:"38px"}}>
      <Box
        onClick={() => handleServiceClick("Bill Payment")}
        sx={{
          backgroundColor: selectedService === "Bill Payment" ? "#031F4F" : "white",
          width:"100px",
          height:"65px",
          borderRadius:"7px",
          boxShadow: "0 0 12px rgba(0, 0, 0, 0.25)",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          cursor:"pointer",transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#031F4F",
            "& > *": {
              color: "white", // Set text color to white on hover
            }
          },
          
        }}
      >
        <img src={Billpayment} alt="Bill Payment" />
        <Typography sx={{color: selectedService === "Bill Payment" ? "white" : "#031F4F", marginLeft:"7px"}}>Bill Payment</Typography>
      </Box>
      <Box
        onClick={() => handleServiceClick("Buy airtime")}
        sx={{
          backgroundColor: selectedService === "Buy airtime" ? "#031F4F" : "white",
          width:"100px",
          height:"65px",
          borderRadius:"7px",
          boxShadow: "0 0 12px rgba(0, 0, 0, 0.25)",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          cursor:"pointer",transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#031F4F",
            "& > *": {
              color: "white", // Set text color to white on hover
            }
          },

        }}
      >
        <img src={Buyairtime} alt="Buy airtime" />
        <Typography sx={{color: selectedService === "Buy airtime" ? "white" : "#031F4F", marginLeft:"7px"}}>Buy airtime</Typography>
      </Box>
      <Box
        onClick={() => handleServiceClick("MPESA")}
        sx={{
          backgroundColor: selectedService === "MPESA" ? "#031F4F" : "white",
          width:"100px",
          height:"65px",
          borderRadius:"7px",
          display:"flex",
          boxShadow: "0 0 12px rgba(0, 0, 0, 0.25)",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          cursor:"pointer",transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#031F4F",
            "& > *": {
              color: "white", // Set text color to white on hover
            }
          },

        }}
      >
        <img src={Mpesa} alt="MPESA" />
        <Typography sx={{color: selectedService === "MPESA" ? "white" : "#031F4F", marginLeft:"7px"}}>MPESA</Typography>
      </Box>
      <Box
        onClick={() => handleServiceClick("PESALINK")}
        sx={{
          backgroundColor: selectedService === "PESALINK" ? "#031F4F" : "white",
          width:"100px",
          height:"65px",
          borderRadius:"7px",
          display:"flex",
          boxShadow: "0 0 12px rgba(0, 0, 0, 0.25)",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          cursor:"pointer",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#031F4F",
            "& > *": {
              color: "white", // Set text color to white on hover
            }
          },

        }}
      >
        <img src={Pesalink} alt="PESALINK" />
        <Typography sx={{color: selectedService === "PESALINK" ? "white" : "#031F4F", marginLeft:"7px"}}>PESALINK</Typography>
      </Box>
      <Box
        onClick={() => handleServiceClick("Beneficiary")}
        sx={{
          backgroundColor: selectedService === "Beneficiary" ? "#031F4F" : "white",
          width:"100px",
          height:"65px",
          borderRadius:"7px",
          display:"flex",
          boxShadow: "0 0 12px rgba(0, 0, 0, 0.25)",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          cursor:"pointer",transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#031F4F",
            "& > *": {
              color: "white", // Set text color to white on hover
            }
          },

        }}
      >
        <img src={Beneficiary} alt="Beneficiary" />
        <Typography sx={{color: selectedService === "Beneficiary" ? "white" : "#031F4F", marginLeft:"7px"}}>Beneficiary</Typography>
      </Box>
      <Box
        onClick={() => handleServiceClick("Add Account")}
        sx={{
          backgroundColor: selectedService === "Add Account" ? "#031F4F" : "white",
          width:"100px",
          height:"65px",
          borderRadius:"7px",
          display:"flex",
          boxShadow: "0 0 12px rgba(0, 0, 0, 0.25)",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          cursor:"pointer",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#031F4F",
            "& > *": {
              color: "white", // Set text color to white on hover
            }
          },

        }}
      >
        <img src={Addaccount} alt="Add Account" />
        <Typography sx={{color: selectedService === "Add Account" ? "white" : "#031F4F", marginLeft:"7px"}}>Add Account</Typography>
      </Box>
    </Box>
  );
}

export default Services;
