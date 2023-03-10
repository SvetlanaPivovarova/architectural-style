import logo from "../../assets/IconLogo.svg";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo-container">
      <img src={logo} className="logo-img" alt="architecture logo" />
      <h1 className="header-heading">Первомайская</h1>
    </div>
  );
}

export default Logo;
