import React from "react";
import "./NavBar.css";

function NavBar() {
  const [isActiveNavigation, setIsActiveNavigation] = React.useState(0);
  const navigationlinks = [
    "О комплексе",
    "Особенности",
    "Пентхаусы",
    "Выбрать квартиру",
  ];

  const onClickNavigation = (i) => {
    setIsActiveNavigation(i);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navigationlinks.map((item, i) => (
          <li
            key={i}
            onClick={() => onClickNavigation(i)}
            className={
              isActiveNavigation === i
                ? "navbar-item navbar-item_type_active"
                : "navbar-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
