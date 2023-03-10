import Logo from "../Logo/index";
import NavBar from "../NavBar/index";
import HeaderMenu from "../HeaderMenu/index";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <NavBar />
      <HeaderMenu />
    </header>
  );
}

export default Header;
