import { Box, Typography, Button, TextField, MenuItem } from '@mui/material';
import arrow from "../../assets/arrow.svg"
import { useState } from 'react';

function AddBeneficiaries() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <Box sx={{  height: "0px", marginTop: "20px" }}>
      <Box sx={{ display: "flex", gap: "400px" }}>
        <Typography sx={{ color: "#01215B", fontWeight: "bold", fontFamily: "montserrat", marginLeft: "20px" }}>
          Add Beneficiary
        </Typography>
        <Box sx={{ display: "flex",gap:"4px" }}>
          <Typography sx={{ color: "#A38526", fontWeight: "bold", fontFamily: "montserrat", fontSize: "15px" }}>
            MANAGE BENEFICIARIES
          </Typography>
          <Box >
            <img src={arrow} />
          </Box>
          
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "white", marginLeft: "20px", marginRight: "20px",boxShadow: "0 0 12px rgba(0, 0, 0, 0.25)", borderRadius: "6px", height: "245px" }}>
        <Box sx={{ display: "flex", marginTop: "0px", paddingTop: "7px", paddingRight: "10px", marginLeft: "20px", gap: "10px" }}>
          <Button
            onClick={() => handleServiceClick("Within Bank")}
            sx={{
              textTransform: 'none',
              backgroundColor: selectedService === "Within Bank" ? "#031F4F" : "white",
              color: selectedService === "Within Bank" ? "#FFFFFF" : "#A38526",
              width: "120px",
              border: `2px solid ${selectedService === "Within Bank" ? "#031F4F" : "#01215B"}`,
              fontFamily: "montserrat",
              height: "30px",
              cursor: "pointer",
              '&:hover': {
                backgroundColor: selectedService !== "Within Bank" ? "#031F4F" : selectedService === "Within Bank" ? "#031F4F" : "white",
                color: selectedService !== "Within Bank" ? "#FFFFFF" : "#A38526",
                borderColor: "#01215B",
              },

            }}
          >
            Within Bank
          </Button>
          <Button
            onClick={() => handleServiceClick("Other Banks - RTGS")}
            sx={{
              textTransform: 'none',
              backgroundColor: selectedService === "Other Banks - RTGS" ? "#031F4F" : "white",
              color: selectedService === "Other Banks - RTGS" ? "#FFFFFF" : "#A38526",
              border: `2px solid ${selectedService === "Other Banks - RTGS" ? "#031F4F" : "#01215B"}`,
              fontFamily: "montserrat",
              width:"160px",
              height: "30px",
              cursor: "pointer", // Adding cursor here
              '&:hover': {
                backgroundColor: selectedService !== "Within Bank" ? "#031F4F" : selectedService === "Other Banks - RTGS"  ? "#031F4F" : "white",
                color: selectedService !== "Within Bank" ? "#FFFFFF" : "#A38526",
                borderColor: "#01215B",
              },
            }}
          >
            Other Banks-RTGS
          </Button>
          <Button
            onClick={() => handleServiceClick("Other Banks - EFT")}
            sx={{
              textTransform: 'none',
              backgroundColor: selectedService === "Other Banks - EFT" ? "#031F4F" : "#ffffff",
              color: selectedService === "Other Banks - EFT" ? "#FFFFFF" : "#A38526",
              border: `2px solid ${selectedService === "Other Banks - EFT" ? "#031F4F" : "#01215B"}`,
              fontFamily: "montserrat",
              height: "30px",
              width:"150px",
              cursor: "pointer", // Adding cursor here
              '&:hover': {
                backgroundColor: selectedService !== "Within Bank" ? "#031F4F" : selectedService === "Other Banks - EFT"  ? "#031F4F" : "white",
                color: selectedService !== "Within Bank" ? "#FFFFFF" : "#A38526",
                borderColor: "#01215B",
              },
            }}
          >
            Other Banks-EFT
          </Button>
          <Button
            onClick={() => handleServiceClick("International")}
            sx={{
              textTransform: 'none',
              backgroundColor: selectedService === "International" ? "#031F4F" : "white",
              color: selectedService === "International" ? "#FFFFFF" : "#A38526",
              border: `2px solid ${selectedService === "International" ? "#031F4F" : "#01215B"}`,
              width: "107px",
              fontFamily: "montserrat",
              height: "30px",
              cursor: "pointer", // Adding cursor here
              '&:hover': {
                backgroundColor: selectedService !== "Within Bank" ? "#031F4F" : selectedService === "International"   ? "#031F4F" : "white",
                color: selectedService !== "Within Bank" ? "#FFFFFF" : "#A38526",
                borderColor: "#01215B",
              },
            }}
          >
            International
          </Button>
          <Button
            onClick={() => handleServiceClick("Pesalink")}
            sx={{
              textTransform: 'none',
              backgroundColor: selectedService === "Pesalink" ? "#031F4F" : "white",
              color: selectedService === "Pesalink" ? "#FFFFFF" : "#A38526",
              border: `2px solid ${selectedService === "Pesalink" ? "#031F4F" : "#01215B"}`,
              width: "90px",
              fontFamily: "montserrat",
              height: "30px",
              cursor: "pointer", // Adding cursor here
              '&:hover': {
                backgroundColor: selectedService !== "Within Bank" ? "#031F4F" : selectedService === "Pesalink"   ? "#031F4F" : "white",
                color: selectedService !== "Within Bank" ? "#FFFFFF" : "#A38526",
                borderColor: "#01215B",
              },
            }}
          >
            Pesalink
          </Button>
          <Button
            onClick={() => handleServiceClick("mPesa")}
            sx={{
              textTransform: 'none',
              backgroundColor: selectedService === "mPesa" ? "#031F4F" : "white",
              color: selectedService === "mPesa" ? "#FFFFFF" : "#A38526",
              border: `2px solid ${selectedService === "mPesa" ? "#031F4F" : "#01215B"}`,
              width: "80px",
              fontFamily: "montserrat",
              height: "30px",
              cursor: "pointer", // Adding cursor here
              '&:hover': {
                backgroundColor: selectedService !== "Within Bank" ? "#031F4F" : selectedService === "mPesa"   ? "#031F4F" : "white",
                color: selectedService !== "Within Bank" ? "#FFFFFF" : "#A38526",
                borderColor: "#01215B",
              },
            }}
          >
            mPesa
          </Button>
        </Box>
        <Typography sx={{ color: "#01215B", fontWeight: "bold", fontFamily: "montserrat", marginLeft: "20px", marginTop: "15px" }}>
          Beneficiary Bank Details
        </Typography>

        <Box sx={{ display: "flex", gap: "60px", marginLeft: "20px", marginTop: "3px" }}>
          <TextField sx={{ width: "350px", backgroundColor: "whitesmoke", '& input': { height: '14px' }, marginTop: '0px' }}
            label="Account Number"
          />
          <TextField

            label=""

            sx={{ width: "350px", backgroundColor: "whitesmoke", '& input': { height: '14px' }, marginTop: '0px' }}
          >
          </TextField>
        </Box>
      
        <Box sx={{ display: "flex", gap: "60px", marginLeft: "20px", marginTop: "13px", '& .MuiSelect-selectMenu': { paddingTop: '4px', paddingBottom: '4px' } }}>
          <TextField
            select
            label="Select Currency"
            sx={{
              width: "350px",
              backgroundColor: "whitesmoke",
              '& .MuiSelect-selectMenu': {
                paddingTop: '4px',
                paddingBottom: '4px',
                maxHeight: '100px',
              },
              '& .MuiInputBase-input': {
                height: '4px'
              }
            }}
          >
            <MenuItem value="KSH">KSH</MenuItem>
            <MenuItem value="Dollar">Dollar</MenuItem>
          </TextField>

          <TextField
            sx={{
              width: "350px",
              backgroundColor: "whitesmoke",
              height: "46px",
              '& input': { height: '14px' },
              marginTop: '0px'
            }}
            label="Re-Enter Account Number"
          />
        </Box>

        <Button sx={{ textTransform: 'none', backgroundColor: "#031F4F !important", color: "#FFFFFF", width: "760px",height:"30px", marginLeft: "20px", marginTop: "7px",fontFamily: "montserrat",fontWeight:"bold" }} >
          ADD BENEFICIARY +
        </Button>
      </Box>

    </Box>
  )
}

export default AddBeneficiaries;
