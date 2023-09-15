import { useMemo } from "react";
import "./ArticleCard.css";
const ArticleCard = ({
  title,
  date,
  labelText,
  labelText1,
  labelText2,
  labelText3,
  propBackgroundImage,
  onArticleContainer3Click,
}) => {
  const imageContainerStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);
  return (
    <div className="row7">
      <div className="article16" onClick={onArticleContainer3Click}>
        <div className="image-container16">
          <div className="image14" style={imageContainerStyle} />
        </div>
        <div className="title-parent14">
          <h2 className="title57">{title}</h2>
          <div className="subtitle25">{date}</div>
          <div className="selection9">
            <div className="label-normal35">
              <div className="label-text35">{labelText}</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">{labelText1}</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">{labelText2}</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">{labelText3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
