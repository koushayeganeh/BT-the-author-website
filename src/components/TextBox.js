import "./TextBox.css";
const AboutCard = ({ title, text }) => {
  return (
    <section className="textbox-list4">
      <div className="textbox-article13">
        <div className="textbox-frame-parent">
          <div className="textbox-title-parent10">
            <div className="textbox-title37">{title}</div>
            <div className="textbox-subtitle18">
              {text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
