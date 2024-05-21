import { useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import View from "../../assets/View.svg";

// Define styles
const containerStyle = {
  marginTop: '10px',
  marginLeft: "20px",
};

const headerStyle = {
  display: 'flex',
  gap: "50px",
  alignItems: 'center',
  marginBottom: '10px',
};

const viewAllStyle = {
  marginLeft: '600px', // Adjust margin for alignment
  cursor: 'pointer',
  display: "flex",
  gap: "10px"
};

// Dummy transaction data
const dummyTransactions = [
  { date: '10/05/2024', mpesaCode: 'MPESA to Account FREQY18764804Y3U', status: 'pending', amount: '10,000.00' },
  { date: '09/05/2024', mpesaCode: 'MPESA to Account FREQY18764804Y3U', status: 'completed', amount: '15,000.00' },
  { date: '08/05/2024', mpesaCode: 'MPESA to Account FREQY18764804Y3U', status: 'declined', amount: '5,000.00' },
  { date: '07/05/2024', mpesaCode: 'MPESA to Account FREQY18764804Y3U', status: 'completed', amount: '20,000.00' },
];

// Define cell and table styles
const cellStyle = {
  padding: '8px',
  fontSize: '1.0rem',
};

const tableContainerStyle = {
  width: '100%',
};

const RecentTransactions = ({ accountNumber }) => {
  const handleServiceClick = () => {
    // Handle click event
    // You can add navigation logic here if needed
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
    <div style={containerStyle}>
      <div style={headerStyle}>
        <Typography variant="h6">Recent Transactions</Typography>
        <Typography variant="body1">Account Number: {accountNumber}</Typography>
      </div>
      <TableContainer component={Paper} style={tableContainerStyle}>
        <Table aria-label="Recent Transactions">
          <TableHead>
            <TableRow>
              <TableCell style={cellStyle}>Date</TableCell>
              <TableCell style={cellStyle}>Mpesa Code</TableCell>
              <TableCell style={cellStyle}>Status</TableCell>
              <TableCell style={cellStyle}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyTransactions.map((transaction, index) => (
              <TableRow key={index} sx={{ borderBottom: '1px solid #A38526' }}>
                <TableCell style={cellStyle}>{transaction.date}</TableCell>
                <TableCell style={cellStyle}>{transaction.mpesaCode}</TableCell>
                <TableCell style={cellStyle}>{transaction.status}</TableCell>
                <TableCell style={cellStyle}>{transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div style={viewAllStyle} onClick={handleServiceClick}>
          <Typography variant="body2">VIEW ALL</Typography>
          <img src={View} alt="View all" />
        </div>
      </TableContainer>
    </div>
  );
};

// Prop validation
RecentTransactions.propTypes = {
  accountNumber: PropTypes.string.isRequired,
};

export default RecentTransactions;
