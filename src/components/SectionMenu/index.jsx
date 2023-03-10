import React from "react";
import "./SectionMenu.css";

function SectionMenu({ items, isSelectedContent, setIsSelectedContent }) {
  const onClickMenuLink = (i) => {
    setIsSelectedContent(items[i]);
  };

  return (
    <nav className="section-menu">
      <ul className="section-menu-list">
        {items.map((item, i) => (
          <li
            key={i}
            onClick={() => onClickMenuLink(i)}
            className={
              isSelectedContent.id === i
                ? "section-menu-item section-menu-item_type_active"
                : "section-menu-item"
            }
          >
            {item.heading}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SectionMenu;
