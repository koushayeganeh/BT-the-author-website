import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bookData from "../pages/bookData.js";
import "./ShoppingCard.css";

const ShoppingCard = () => {
  const { bookID } = useParams();

  // Find the book object with a matching ID
  const book = bookData.find((item) => item.id === parseInt(bookID));

  const onImage27Click = useCallback(() => {
    window.open(book.amazon);
  }, []);

  const onImage28Click = useCallback(() => {
    window.open(book.ebay);
  }, []);

  const onImage29Click = useCallback(() => {
    window.open(book.aliexpress);
  }, []);

  const onImage30Click = useCallback(() => {
    window.open(book.bookshop);
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
              <img
                className="image-29-icon"
                alt=""
                src="/image-281@2x.png"
                onClick={onImage28Click}
              />
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
    </div>
  );
};

export default ShoppingCard;
