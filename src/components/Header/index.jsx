import Logo from "../Logo/index";
import NavBar from "../NavBar/index";
import HeaderMenu from "../HeaderMenu/index";

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavBar />
      <HeaderMenu />
    </div>
  );
}

export default Header;
