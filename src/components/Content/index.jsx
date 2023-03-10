import "./Content.css";

function Content({ heading, description, img, id }) {
  return (
    <section className="content">
      <div className="content-container">
        <article className="content-info">
          <h2 className="content-heading">{heading}</h2>
          <p className="content-text">{description}</p>
          <p className="content-pagination">
            {id + 1}/{6}
          </p>
        </article>
        <img className="content-illustration" src={img} alt={heading} />
      </div>
    </section>
  );
}

export default Content;
