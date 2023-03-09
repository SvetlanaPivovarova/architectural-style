import SectionMenu from "../SectionMenu";
import Content from "../Content";
import "./MainSection.css";

function MainSection() {
  return (
    <section className="main-section">
      <SectionMenu />
      <Content />
    </section>
  );
}

export default MainSection;
