import Logo from "../Logo/index";
import NavBar from "../NavBar/index";
import HeaderInfo from "../HeaderInfo/index";
import BurgerMenu from "../BurgerMenu/index";

function Header() {
  return (
    <div className="header">
      <Logo />
      <NavBar />
      <HeaderInfo />
      <BurgerMenu />
    </div>
  );
}

export default Header;
