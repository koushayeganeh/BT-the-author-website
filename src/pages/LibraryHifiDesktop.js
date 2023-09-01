import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard";
import ContainerButtonSection from "../components/ContainerButtonSection";
import "./LibraryHifiDesktop.css";
const LibraryHifiDesktop = () => {
  const navigate = useNavigate();

  const onArticleContainerClick = useCallback(() => {
    navigate("/single-book");
  }, [navigate]);

  const onArticleContainer2Click = useCallback(() => {
    navigate("/single-book");
  }, [navigate]);

  const onArticleContainer3Click = useCallback(() => {
    navigate("/single-book");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPrimaryClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onArticleContainer1Click = useCallback(() => {
    navigate("/single-book");
  }, [navigate]);

  const onTabTextClick = useCallback(() => {
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

  return (
    <div className="library-hifi-desktop">
      <section className="section14" id="page-hero-section">
        <img
          className="image-container-icon6"
          alt=""
          id="page-hero-img"
          src="/image-container@2x.png"
        />
        <img className="section-child5" alt="" src="/vector-2002.svg" />
      </section>
      <BookCard
        imageFileName="/image@2x.png"
        onArticleContainerClick={onArticleContainerClick}
      />
      <section className="row4" id="book-section">
        <div className="article12" onClick={onArticleContainer1Click}>
          <div className="image-container9">
            <div className="image7">
              <img className="image-9-icon" alt="" src="/image-9@2x.png" />
            </div>
          </div>
          <div className="title-parent9">
            <h1 className="title32">Book Title 1</h1>
            <div className="subtitle16">Subtitle 1</div>
            <div className="subtitle17">Summary 1</div>
            <div className="selection6">
              <div className="label-normal24">
                <div className="label-text24">Mystery</div>
              </div>
              <div className="label-normal24">
                <div className="label-text24">Mystery</div>
              </div>
              <div className="label-normal24">
                <div className="label-text24">Mystery</div>
              </div>
              <div className="label-normal24">
                <div className="label-text24">Mystery</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookCard
        imageFileName="/image1@2x.png"
        frameDivZIndex="3"
        onArticleContainerClick={onArticleContainer2Click}
      />
      <BookCard
        imageFileName="/image2@2x.png"
        frameDivZIndex="4"
        onArticleContainerClick={onArticleContainer3Click}
      />
      <ContainerButtonSection
        sectionZIndex="5"
        onButtonClick={onButtonClick}
        onPrimaryClick={onPrimaryClick}
      />
      <section className="section15" id="footer-container">
        <div className="container7">
          <div className="title33">© 2023 Author XYZ. All rights reserved.</div>
        </div>
      </section>
      <header className="top-bar6" id="header">
        <img className="top-bar-child3" alt="" src="/rectangle-4137@2x.png" />
        <h3 className="title34" id="logo-typo">
          Barış Tayfün
        </h3>
        <nav className="navigation6" id="navbar">
          <div className="tab30" onClick={onTabTextClick}>
            Home
          </div>
          <div className="tab30" onClick={onTabText1Click}>
            Author
          </div>
          <div className="tab30" onClick={onTabText2Click}>
            Library
          </div>
          <div className="tab30" onClick={onTabText3Click}>
            Blog
          </div>
          <div className="tab30" onClick={onTabText4Click}>
            Contact
          </div>
        </nav>
      </header>
    </div>
  );
};

export default LibraryHifiDesktop;
