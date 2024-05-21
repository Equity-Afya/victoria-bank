import { useEffect } from 'react';
import ATMcard from "../../components/ATM-card/ATMcard"
import "./MyAccount.css";

const MyAccount = () => {
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
    <div className="my-account">
      <div className="my-accounts-text">My Accounts</div>
      <div className="container-56">
        <div className="select-account">Select Account</div>
        <img className="icon" src="src/assets/vectors/dropdown-icon.svg" alt="dropdown" />
      </div>
      <ATMcard/>
      <div className="container-41">
        <div className="actual-balance">Actual Balance</div>
        <div className="container-15">
          <div className="container-11">$43,000.00</div>
          <img className="container-20" src="src/assets/vectors/view.svg" alt="view" />
        </div>
      </div>
      <div className="current-accounts">Current Accounts</div>
      <div className="container-10" >
        <div className="container-45">
          <img className="icon-1" src="src/assets/vectors/next-icon-black.svg" alt="next" />
          <div className="pending-tasks">Pending Tasks</div>
        </div>
        <div className="total-10">
          <div className="total">TOTAL</div>
          <div className="container">65</div>
        </div>
      </div>
      <div className="container-10 container-17" >
        <div className="container-45">
          <img className="icon-1" src="src/assets/vectors/next-icon-gold.svg" alt="next" />
          <div className="pending-tasks">Pending Transactions</div>
        </div>
        <div className="total-10">
          <div className="total">TOTAL</div>
          <div className="container container-1">87</div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
