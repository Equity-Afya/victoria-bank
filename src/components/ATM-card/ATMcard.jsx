import "./ATMcard.css";

const ATMcard = () => {
  return (
    <div className="atm-card">
      <div className="container-9">
        <div className="container-36">
          <img className="group-4" src="./src/assets/vectors/Vlogo.svg" />
          <div className="vector">
            <img className="vector-50" src="./src/assets/vectors/chip.svg" />
          </div>
        </div>
        <div className="container-54">
          <div className="container-26">
            <div className="eliud-njogu">Eliud Njogu</div>
            <span className="container-12">0010 0048 3290</span>
          </div>
          <div className="rectangle-11">
            <div className="usd">USD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATMcard;
