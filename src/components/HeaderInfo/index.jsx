import "./HeaderInfo.css";

function HeaderInfo() {
  return (
    <div>
      <p className="header-info">8 888 888 88 88</p>
      <div className="burger-menu">
        <input
          className="menu__checkbox-pseudo"
          id="menu-toggle"
          type="checkbox"
        />
        <label className="burger-menu_button" htmlFor="menu-toggle">
          <span />
        </label>
      </div>
    </div>
  );
}

export default HeaderInfo;
