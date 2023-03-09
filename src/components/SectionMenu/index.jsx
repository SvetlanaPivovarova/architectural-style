import React from "react";
import "./SectionMenu.css";

function SectionMenu() {
  const [isActiveMenuLink, setIsActiveMenuLink] = React.useState(0);
  const menuLinks = [
    "Архитектура",
    "Благоустройство",
    "Безопасность",
    "Инженерия",
    "Инфраструктура",
    "Транспортная доступность",
  ];

  const onClickMenuLink = (i) => {
    setIsActiveMenuLink(i);
  };

  return (
    <nav className="section-menu">
      <ul className="section-menu-list">
        {menuLinks.map((item, i) => (
          <li
            key={i}
            onClick={() => onClickMenuLink(i)}
            className={
              isActiveMenuLink === i
                ? "section-menu-item section-menu-item_type_active"
                : "section-menu-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SectionMenu;
