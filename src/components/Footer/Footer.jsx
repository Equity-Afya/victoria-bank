import BottomCard from '../BottomCard/BottomCard';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <BottomCard/>
      <div className="footer-content">
        <p>&copy; 2024 Victoria Bank Limited</p>
      </div>
    </footer>
  );
};

export default Footer;

