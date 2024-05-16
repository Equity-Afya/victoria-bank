import { useState } from 'react';
import { Box, Paper, Typography, InputBase, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import pdf from '../assets/icons/pdf.svg';
import excel from '../assets/icons/excel.svg';

const ManageBeneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  const handleAddBeneficiary = () => {
    setBeneficiaries([...beneficiaries, { id: Date.now(), name: 'New Beneficiary' }]);
  };

  return (
    <Box
      sx={{
        marginLeft: '550px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        bgcolor: '#f5f5f5',
        padding: 2,
      }}
    >
      {/* Container for the subtitles */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: '10px',
        }}
      >
        {/* Subtitle on the left */}
        <Typography variant="subtitle1" sx={{ marginLeft: '20px', color: '#01215B', fontFamily: '"Montserrat", sans-serif' }}>
          Beneficiaries
        </Typography>
        {/* Subtitle on the right with Person Add Icon */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ marginRight: '8px', textTransform: 'uppercase', color: '#A38526', fontFamily: '"Montserrat", sans-serif' }}>
            ADD BENEFICIARY
          </Typography>
          <PersonAddIcon fontSize="small" onClick={handleAddBeneficiary} />
        </Box>
      </Box>
      <Paper
        elevation={3}
        sx={{
          width: '60vw',
          height: '50vh',
          padding: 6,
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {/* Search Bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '4px',
            padding: '4px 8px',
            marginBottom: '16px',
          }}
        >
          <Box sx={{ backgroundColor: '#f0f0f0' ,width: '380px'}}>
           <InputBase
        placeholder="Search Beneficiary"
        sx={{ marginRight: '8px', flexGrow: 1}}
      />
      <IconButton>
        <SearchIcon />
      </IconButton></Box>
         
          <Box sx={{ top: '-50px', marginLeft: '580px', gap: '15px', display: 'flex'}}>
          <Box>
          <img src={excel} alt="Excel"  />
          </Box>
          <Box>
          <img src={pdf} alt="PDF"  />
          </Box>
          
          </Box>
        </Box>

        {/* New Subtitles Below the Search Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '10px',

          }}
        >
          {/* Description Subtitle */}
          <Typography variant="subtitle1" sx={{ color: '#01215B' }}>
            Description
          </Typography>
         <Box>
         
          
          {/* Manage Subtitle */}
          <Typography variant="subtitle1" sx={{ color: '#01215B', marginLeft: '800px' }}>
            Manage
          </Typography>
        </Box>
         </Box>
          {/* Overlay Images */}
          

        {/* Table Container */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {beneficiaries.map((beneficiary) => (
                <TableRow key={beneficiary.id}>
                  <TableCell>{beneficiary.name}</TableCell>
                  <TableCell>
                    <EditIcon />
                    <VisibilityIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Dynamic Rendering of Horizontal Lines Based on Beneficiaries */}
        {beneficiaries.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '10px',
            }}
          >
            <Box sx={{ borderBottom: `1px solid #000`, flex: 1 }} />
            <Box sx={{ borderBottom: `1px solid #000`, flex: 1 }} />
            <Box sx={{ borderBottom: `1px solid #000`, flex: 1 }} />
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default ManageBeneficiaries;


