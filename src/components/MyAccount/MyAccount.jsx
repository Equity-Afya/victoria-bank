import ATMcard from "../ATM-card/ATMcard";
import "./MyAccount.css";

const MyAccount = () => {
  return (
    <div className="my-account">
      <div className="my-accounts-text">My Accounts</div>
      <div className="container-56">
        <div className="select-account">Select Account</div>
        <img className="icon" src="src/assets/vectors/dropdown-icon.svg" />
      </div>
      <ATMcard />
      <div className="container-41">
        <div className="actual-balance">Actual Balance</div>
        <div className="container-15">
          <span className="container-11">$43,000.00</span>
          <img className="container-20" src="src/assets/vectors/view.svg" />
        </div>
      </div>
      <div className="current-accounts">Current Accounts</div>
      <div className="container-10">
        <div className="container-45">
          <img
            className="icon-1"
            src="src/assets/vectors/next-icon-black.svg"
          />
          <div className="pending-tasks">Pending Tasks</div>
        </div>
        <div className="total-10">
          <div className="total">TOTAL</div>
          <span className="container">65</span>
        </div>
      </div>
      <div className="container-10 container-17">
        <div className="container-45">
          <img className="icon-1" src="src/assets/vectors/next-icon-gold.svg" />
          <div className="pending-tasks">Pending Transactions</div>
        </div>
        <div className="total-10">
          <div className="total">TOTAL</div>
          <span className="container container-1">87</span>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
