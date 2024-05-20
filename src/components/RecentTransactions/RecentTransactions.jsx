
import PropTypes from 'prop-types';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import View from "../../assets/View.svg";

const containerStyle = {
  marginTop: '10px',
  marginLeft:"20px",
};

const headerStyle = {
  display: 'flex',
  gap:"50px",
  alignItems: 'center',
  marginBottom: '10px',
};

const viewAllStyle = {
  marginLeft: '665px',
  cursor: 'pointer',
  display:"flex",
  gap:"10px"
};

const dummyTransactions = [
  { date: '10/05/2024', mpesaCode: 'MPESA to Account FREQY18764804Y3U', status: 'pending', amount: '10,000.00' },
  { date: '09/05/2024', mpesaCode: 'MPESA to Account FREQY18764804Y3U', status: 'completed', amount: '15,000.00' },
  { date: '08/05/2024', mpesaCode: 'MPESA to Account FREQY18764804Y3U', status: 'declined', amount: '5,000.00' },
  { date: '07/05/2024', mpesaCode: 'MPESA to Account FREQY18764804Y3U', status: 'completed', amount: '20,000.00' },
];

const cellStyle = {
  padding: '8px',
  fontSize: '1.0rem',
};

const tableContainerStyle = {
  width: '100%',
};

const RecentTransactions = ({ accountNumber }) => {
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <Typography variant="h6">Recent Transactions</Typography>
        <Typography variant="body1" sx={{marginRight:"40p"}}>Account Number: {accountNumber}</Typography>
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
        <div style={viewAllStyle}>
          <Typography variant="body2">VIEW ALL</Typography>
          <img src={View} alt="View all" />
        </div>
      </TableContainer>
    </div>
  );
};

RecentTransactions.propTypes = {
  accountNumber: PropTypes.string.isRequired,
};

export default RecentTransactions;
