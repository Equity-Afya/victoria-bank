import './BottomCard.css';
import { Box } from '@mui/material';

const BottomCard = () => {
  return (
    <div className="card">
        <Box>
        <p>The mobile banking service is available on Smart Phones and Tablets using <br />iOS,
        Android and Windows mobile operating systems. The E-banking platform <br />
        can be accessed using Internet Explorer, Google Chrome, Mozilla Firefox, <br />
        Safari and Opera browsers.</p> 
        </Box>
      <div className="icons">
        <img src="src/assets/icons/Playstore.svg" alt="Play Store" />
        <img src="src/assets/icons/Appstore.svg" alt="Play Store" />
      </div>
    </div>
  );
};

export default BottomCard;