import { Box, Typography, Button, TextField, MenuItem, Grid } from '@mui/material';
import arrow from "../../assets/arrow.svg";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBeneficiaries() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [buttonActive, setButtonActive] = useState(false); // State to track button's active state

  const ManageBeneficiaries = () => {
    navigate("/manage-beneficiaries"); // Navigate to the "manage-beneficiaries" page
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleButtonClick = () => {
    setButtonActive(true); // Set button active when clicked
  };

  return (
    <Box sx={{ marginTop: "20px", marginLeft: "auto", marginRight: "auto", maxWidth: "800px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }} onClick={ManageBeneficiaries} style={{ cursor: "pointer" }}>
        <Typography sx={{ color: "#01215B", fontWeight: "bold", fontFamily: "montserrat" }}>
          Add Beneficiary
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#A38526", fontWeight: "bold", fontFamily: "montserrat", fontSize: "15px" }}>
            MANAGE BENEFICIARIES
          </Typography>
          <img src={arrow} alt="Arrow" />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "white", boxShadow: "0 0 12px rgba(0, 0, 0, 0.25)", borderRadius: "6px", padding: "10px" }}>
        {/* Buttons */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "3px", marginBottom: "20px" }}>
          {services.map((service) => (
            <Button
              key={service}
              onClick={() => handleServiceClick(service)}
              variant="contained"
              sx={{
                textTransform: 'none',
                backgroundColor: selectedService === service ? "#031F4F" : "white",
                color: selectedService === service || buttonActive ? "#FFFFFF" : "#A38526", // Change color if button is active
                border: `2px solid ${selectedService === service ? "#031F4F" : "#01215B"}`,
                fontFamily: "montserrat",
                minWidth: "80px",
                cursor: "pointer",
                '&:hover': {
                  backgroundColor: selectedService === service || buttonActive ? (selectedService === service ? "#031F4F" : "white") : "#031F4F", // Apply hover effect only when pointed
                  color: selectedService === service || buttonActive ? "#FFFFFF" : "#A38526",
                },
              }}
              onMouseDown={handleButtonClick} // Trigger button active state when clicked
              onMouseUp={() => setButtonActive(false)} // Reset button active state when released
            >
              {service}
            </Button>
          ))}
        </Box>
        {/* Form */}
        <Typography sx={{ color: "#01215B", fontWeight: "bold", fontFamily: "montserrat", marginBottom: "10px" }}>
          Beneficiary Bank Details
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={7} sm={3.5}>
            <TextField sx={{ backgroundColor: "whitesmoke" }} label="Account Number" fullWidth />
          </Grid>
          <Grid item xs={7} sm={3.5}>
            <TextField select label="Select Currency" sx={{ backgroundColor: "whitesmoke" }} fullWidth>
              <MenuItem value="KSH">KSH</MenuItem>
              <MenuItem value="Dollar">Dollar</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={7} sm={3.5}>
            <TextField sx={{ backgroundColor: "whitesmoke" }} label="Re-Enter Account Number" fullWidth />
          </Grid>
        </Grid>
        {/* Add Button */}
        <Button
          onClick={() => alert("Added beneficiary")}
          variant="contained"
          sx={{ textTransform: 'none', backgroundColor: "#031F4F", color: "#FFFFFF", width: "100%", marginTop: "20px" }}
        >
          ADD BENEFICIARY +
        </Button>
      </Box>
    </Box>
  );
}

const services = ["Within Bank", "Other Banks - RTGS", "Other Banks - EFT", "International", "Pesalink", "mPesa"];

export default AddBeneficiaries;
