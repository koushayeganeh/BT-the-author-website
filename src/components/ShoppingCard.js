import { useCallback } from "react";
import "./ShoppingCard.css";
const ShoppingCard = () => {
  const onImage27Click = useCallback(() => {
    window.open("https://www.amazon.com/");
  }, []);

  const onImage29Click = useCallback(() => {
    window.open("https://www.amazon.com/");
  }, []);

  const onImage30Click = useCallback(() => {
    window.open("https://www.amazon.com/");
  }, []);

  return (
    <div className="section24">
      <div className="image-container15">
        <div className="image13">
          <div className="frame-group">
            <div className="image-27-container">
              <img
                className="image-29-icon"
                alt=""
                src="/image-271@2x.png"
                onClick={onImage27Click}
              />
              <div className="amazon">Amazon</div>
            </div>
            <div className="image-27-container">
              <img className="image-28-icon2" alt="" src="/image-281@2x.png" />
              <div className="amazon">eBay</div>
            </div>
            <div className="image-27-container">
              <img
                className="image-29-icon"
                alt=""
                src="/image-29@2x.png"
                onClick={onImage29Click}
              />
              <div className="amazon">Aliexpress</div>
            </div>
            <div className="image-27-container">
              <img
                className="image-29-icon"
                alt=""
                src="/image-30@2x.png"
                onClick={onImage30Click}
              />
              <div className="amazon">Bookshop</div>
            </div>
          </div>
        </div>
      </div>
      <img className="section-child13" alt="" src="/vector-200.svg" />
    </div>
  );
};

export default ShoppingCard;
