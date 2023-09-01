import { useMemo } from "react";
import "./CardContainer.css";
const CardContainer = ({
  title,
  subtitle,
  subtitle1,
  labelText,
  labelText1,
  labelText2,
  labelText3,
  propBackgroundImage,
  onRowContainerClick,
}) => {
  const imageContainerStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className="row5" onClick={onRowContainerClick}>
      <div className="article14">
        <div className="image-container12" style={imageContainerStyle}>
          <div className="image10" />
        </div>
        <div className="title-parent12">
          <div className="title41">{title}</div>
          <div className="subtitle21">{subtitle}</div>
          <div className="subtitle22">{subtitle1}</div>
          <div className="selection7">
            <div className="label-normal28">
              <div className="label-text28">{labelText}</div>
            </div>
            <div className="label-normal28">
              <div className="label-text28">{labelText1}</div>
            </div>
            <div className="label-normal28">
              <div className="label-text28">{labelText2}</div>
            </div>
            <div className="label-normal28">
              <div className="label-text28">{labelText3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
