import { useMemo } from "react";
import "./ContainerButtonSection.css";
const ContainerButtonSection = ({
  sectionZIndex,
  onButtonClick,
  onPrimaryClick,
}) => {
  const sectionStyle = useMemo(() => {
    return {
      zIndex: sectionZIndex,
    };
  }, [sectionZIndex]);

  return (
    <section
      className="section16"
      id="author-go-back-section"
      style={sectionStyle}
    >
      <div className="image-container10">
        <div className="image8">
          <div className="button-wrapper">
            <button
              className="button2"
              id="button-go-back"
              onClick={onButtonClick}
            >
              <button className="primary2" onClick={onPrimaryClick}>
                <div className="title35">Go To Home Page</div>
              </button>
            </button>
          </div>
        </div>
      </div>
      <img className="section-child6" alt="" src="/vector-200.svg" />
    </section>
  );
};

export default ContainerButtonSection;
