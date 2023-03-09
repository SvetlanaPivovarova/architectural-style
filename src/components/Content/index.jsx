import architecture from "../../assets/architecture.png";
import { TEXTS } from "../../utils/constants";
import "./Content.css";

function Content({
  heading = TEXTS[0].heading,
  description = TEXTS[0].text,
  img = TEXTS[0].img,
}) {
  return (
    <section className="content">
      <div className="content-container">
        <article className="content-info">
          <h2 className="content-heading">{heading}</h2>
          <p className="content-text">{description}</p>
          <p className="content-pagination">
            {1}/{6}
          </p>
        </article>
        <img className="content-illustration" src={img} alt={heading} />
      </div>
    </section>
  );
}

export default Content;
