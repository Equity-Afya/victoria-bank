<<<<<<< HEAD
import "./Header.css";

const Header = () => {
  return <div></div>;
};

export default Header;
=======
import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="./src/assets/vectors/logo.svg"/> 
      </div>
      <div className="header-right">
        <div className="icon-container">
          <img src="./src/assets/vectors/message-icon.svg"/>
        </div>
        <div className="icon-container">
         <img src="./src/assets/vectors/setting-icon.svg" />
        </div>
        <div className="icon-container">
        <img src="./src/assets/vectors/notification-icon.svg"/>
        </div>
        <span className="username">Username</span>
        <div className="profile-image">
          <img className="profile-image" src="./src/assets/images/profile-image.png"/>
      </div>
      </div>
    </header>
  );
};

export default Header;

>>>>>>> 349be5d984c64f7ff74cd89cce0684cb763da1ba
