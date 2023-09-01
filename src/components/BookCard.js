import { useMemo } from "react";
import "./BookCard.css";
const BookCard = ({
  imageFileName,
  frameDivZIndex,
  onArticleContainerClick,
}) => {
  const rowStyle = useMemo(() => {
    return {
      zIndex: frameDivZIndex,
    };
  }, [frameDivZIndex]);

  return (
    <section className="row8" id="book-section" style={rowStyle}>
      <div className="article19" onClick={onArticleContainerClick}>
        <div className="image-container19">
          <img
            className="image-icon2"
            alt=""
            id="book-img"
            src={imageFileName}
          />
        </div>
        <div className="title-parent17">
          <h1 className="title60">Book Title 1</h1>
          <div className="subtitle28">Subtitle 1</div>
          <div className="subtitle29">Summary 1</div>
          <div className="selection12">
            <div className="label-normal47">
              <div className="label-text47">Mystery</div>
            </div>
            <div className="label-normal47">
              <div className="label-text47">Mystery</div>
            </div>
            <div className="label-normal47">
              <div className="label-text47">Mystery</div>
            </div>
            <div className="label-normal47">
              <div className="label-text47">Mystery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCard;
