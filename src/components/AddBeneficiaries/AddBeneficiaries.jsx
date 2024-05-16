import { Box, Typography, Button, TextField, MenuItem } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function AddBeneficiaries() {
  return (
    <Box sx={{  backgroundColor: "whitesmoke", height: "380px", marginTop: "0px" }}>
      <Box sx={{ display: "flex", gap: "400px" }}>
        <Typography sx={{ color: "#01215B", fontWeight: "bold", fontFamily: "montserrat",marginLeft:"20px" }}>
          Add Beneficiary
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "#A38526", fontWeight: "bold", fontFamily: "montserrat" }}>
            MANAGE BENEFICIARIES
          </Typography>
          <ArrowForwardIcon />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "white", marginLeft: "20px", marginRight: "20px", borderRadius: "6px", height: "320px" }}>
        <Box sx={{ display: "flex", marginTop: "0px", paddingTop: "20px", marginLeft: "20px", gap: "10px" }}>
          <Button sx={{ textTransform: 'none', backgroundColor: "#031F4F !important", color: "#FFFFFF", width: "120px", fontFamily: "montserrat" }}>
            Within Bank
          </Button>
          <Button sx={{ textTransform: 'none', color: "#A38526", border: '2px solid #01215B', fontFamily: "montserrat" }}>
            Other Banks - RTGS
          </Button>
          <Button sx={{ textTransform: 'none', color: "#A38526", border: '2px solid #01215B', fontFamily: "montserrat" }}>
            Other Banks - EFT
          </Button>
          <Button sx={{ textTransform: 'none', color: "#A38526", border: '2px solid #01215B', width: "110px", fontFamily: "montserrat" }}>
            International
          </Button>
          <Button sx={{ textTransform: 'none', color: "#A38526", border: '2px solid #01215B', width: "100px", fontFamily: "montserrat" }}>
            Pesalink
          </Button>
          <Button sx={{ textTransform: 'none', color: "#A38526", border: '2px solid #01215B', width: "110px", fontFamily: "montserrat" }}>
            mPesa
          </Button>
        </Box>
        <Typography sx={{ color: "#01215B", fontWeight: "bold", fontFamily: "montserrat", marginLeft: "20px", marginTop: "20px" }}>
          Beneficiary Bank Details
        </Typography>

        <Box sx={{ display: "flex", gap: "60px", marginLeft: "20px", marginTop: "10px" }}>
          <TextField sx={{ width: "350px", backgroundColor: "whitesmoke", '& input': { height: '14px' }, marginTop: '0px' }}
            label="Account Number"
          />
          <TextField

            label=""

            sx={{ width: "350px", backgroundColor: "whitesmoke", '& input': { height: '14px' }, marginTop: '0px' }}
          >
          </TextField>
        </Box>
        <br />
        <Box sx={{ display: "flex", gap: "60px", marginLeft: "20px", marginTop: "0px", '& input': { height: '14px' } }}>

          <TextField
            select
            label="Select Currency"
            sx={{
              width: "350px",
              backgroundColor: "whitesmoke",
              '& .MuiSelect-select': {
                height: '4px' // Adjust the height as needed
              }
            }}
          >
            <MenuItem value="KSH">KSH</MenuItem>
            <MenuItem value="Dollar">Dollar</MenuItem>
          </TextField>

          <TextField
            sx={{ width: "350px", backgroundColor: "whitesmoke", height: "46px", '& input': { height: '14px' }, marginTop: '0px' }}
            label="Re-Enter Account Number"
          />

        </Box>
        <Button sx={{ textTransform: 'none', backgroundColor: "#031F4F !important", color: "#FFFFFF", width: "760px", marginLeft: "20px", marginTop: "20px" }} >
          ADD BENEFICIARY +
        </Button>
      </Box>

    </Box>
  )
}

export default AddBeneficiaries
