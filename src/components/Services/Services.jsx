import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Box, Typography } from '@mui/material';
import Billpayment from '../../assets/Billpayment.svg';
import Buyairtime from "../../assets/Buyairtime.svg";
import Mpesa from "../../assets/Mpesa.svg";
import Pesalink from "../../assets/Pesalink.svg";
import Beneficiary from "../../assets/Beneficiary.svg";
import Addaccount from "../../assets/Addaccount.svg";

// Define ServiceOption component before using it in Services
const ServiceOption = ({ service, icon, onClick, selected }) => {
  return (
    <Box
      onClick={() => onClick(service)}
      sx={{
        backgroundColor: selected ? "#031F4F" : "white",
        width: "100px",
        height: "65px",
        borderRadius: "7px",
        boxShadow: "0 0 12px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#031F4F",
          "& > *": {
            color: "white", // Set text color to white on hover
          }
        },
      }}
    >
      <img src={icon} alt={service} />
      <Typography sx={{ color: selected ? "white" : "#031F4F", marginLeft: "7px" }}>{service}</Typography>
    </Box>
  );
};

// Define prop types for ServiceOption component
ServiceOption.propTypes = {
  service: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    if (service === "Beneficiary") {
      navigate("/add-beneficiaries");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Adjust styles based on viewport width
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 600) {
        // Set styles for small screens
      } else if (viewportWidth >= 600 && viewportWidth < 900) {
        // Set styles for medium screens
      } else {
        // Set default styles for larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      <ServiceOption
        service="Bill Payment"
        icon={Billpayment}
        onClick={handleServiceClick}
        selected={selectedService === "Bill Payment"}
      />
      <ServiceOption
        service="Buy airtime"
        icon={Buyairtime}
        onClick={handleServiceClick}
        selected={selectedService === "Buy airtime"}
      />
      <ServiceOption
        service="MPESA"
        icon={Mpesa}
        onClick={handleServiceClick}
        selected={selectedService === "MPESA"}
      />
      <ServiceOption
        service="PESALINK"
        icon={Pesalink}
        onClick={handleServiceClick}
        selected={selectedService === "PESALINK"}
      />
      <ServiceOption
        service="Beneficiary"
        icon={Beneficiary}
        onClick={handleServiceClick}
        selected={selectedService === "Beneficiary"}
      />
      <ServiceOption
        service="Add Account"
        icon={Addaccount}
        onClick={handleServiceClick}
        selected={selectedService === "Add Account"}
      />
    </Box>
  );
}

export default Services;
