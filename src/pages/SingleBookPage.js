import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import TopBar from "../components/TopBar";
import ShoppingCard from "../components/ShoppingCard";
import FooterContainer from "../components/FooterContainer";
import bookData from "./bookData.js";
import "./SingleBookPage.css";

const SingleBookPage = () => {
  const navigate = useNavigate();

  // TOPBAR NAVIGATION LINKS

  const onTabText0Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTabText1Click = useCallback(() => {
    navigate("/author");
  }, [navigate]);

  const onTabText2Click = useCallback(() => {
    navigate("/library");
  }, [navigate]);

  const onTabText3Click = useCallback(() => {
    navigate("/blogs");
  }, [navigate]);

  const onTabText4Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onRowContainerClick = useCallback(
    (bookID) => {
      navigate(`/blogs/${bookID}`);
    },
    [navigate]
  );

  const { bookID } = useParams();

  // Find the book object with a matching ID
  const book = bookData.find((item) => item.id === parseInt(bookID));

  if (!book) {
    return <div>Book not found.</div>;
  }

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const showOverlay = () => {
    setIsOverlayVisible(true);
  };

  const hideOverlay = () => {
    setIsOverlayVisible(false);
  };

  // const onPrimaryClick = useCallback(() => {
  //   navigate(`/library/${bookID}`);
  // }, [navigate]);

  // const onRectangleClick = useCallback(() => {
  //   navigate("/single-book");
  // }, [navigate]);

  return (
    <div className="single-book">
      <TopBar
        onTabText0Click={onTabText0Click}
        onTabText1Click={onTabText1Click}
        onTabText2Click={onTabText2Click}
        onTabText3Click={onTabText3Click}
        onTabText4Click={onTabText4Click}
      />
      <section className="section8" id="page-hero-section">
        <img
          className="image-container-icon3"
          alt=""
          id="page-hero-img"
          src="/image-container@2x.png"
        />
      </section>
      <section className="row3">
        <div className="article11">
          <div className="image-container-group">
            <div className="image-container8">
              <img className="image-icon1" alt="" src={book.img} />
            </div>
            <button className="button1">
              <button className="primary1" onClick={showOverlay}>
                <div className="title29">BU KİTABI SATIN AL</div>
              </button>
            </button>
          </div>
          <div className="title-parent8">
            <div className="title30">{book.title}</div>
            <div className="subtitle14">{book.subtitle}</div>
            {book.contentJSX}
          </div>
        </div>
      </section>
      {isOverlayVisible && (
        <>
          <div className="single-book-buy-overlay" onClick={hideOverlay}>
            <ShoppingCard />
          </div>
        </>
      )}

      <FooterContainer />
    </div>
  );
};

export default SingleBookPage;
