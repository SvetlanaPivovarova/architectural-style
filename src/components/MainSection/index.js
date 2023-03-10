import React from "react";
import SectionMenu from "../SectionMenu";
import Content from "../Content";
import "./MainSection.css";
import { CONTENT_ITEMS } from "../../utils/constants";

function MainSection() {
  const [isSelectedContent, setIsSelectedContent] = React.useState(
    CONTENT_ITEMS[0]
  );

  return (
    <section className="main-section">
      <SectionMenu
        items={CONTENT_ITEMS}
        isSelectedContent={isSelectedContent}
        setIsSelectedContent={setIsSelectedContent}
      />
      <Content
        heading={isSelectedContent.heading}
        description={isSelectedContent.text}
        img={isSelectedContent.img}
        id={isSelectedContent.id}
      />
    </section>
  );
}

export default MainSection;
