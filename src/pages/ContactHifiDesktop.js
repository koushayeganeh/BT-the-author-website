import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContactAuthorSection from "../components/ContactAuthorSection";
import ContainerButtonSection from "../components/ContainerButtonSection";
import "./ContactHifiDesktop.css";
const ContactHifiDesktop = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPrimaryClick = useCallback(() => {
    navigate("/");
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

  const onImage27Click = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onImage28Click = useCallback(() => {
    window.open("https://www.linkedin.com/");
  }, []);

  return (
    <div className="contact-hifi-desktop">
      <header className="top-bar2" id="header">
        <img className="top-bar-inner" alt="" src="/rectangle-4137@2x.png" />
        <h3 className="title10" id="logo-typo">
          Barış Tayfün
        </h3>
        <nav className="navigation2" id="navbar">
          <div className="tab10" onClick={onTabTextClick}>
            Home
          </div>
          <div className="tab10" onClick={onTabText1Click}>
            Author
          </div>
          <div className="tab10" onClick={onTabText2Click}>
            Library
          </div>
          <div className="tab10" onClick={onTabText3Click}>
            Blog
          </div>
          <div className="tab10" onClick={onTabText4Click}>
            Contact
          </div>
        </nav>
      </header>
      <section className="section5" id="page-hero-section">
        <img
          className="image-container-icon2"
          alt=""
          id="page-hero-img"
          src="/image-container@2x.png"
        />
        <img className="vector-icon" alt="" src="/vector-2002.svg" />
      </section>
      <ContactAuthorSection />
      <section className="section6" id="social-links">
        <div className="image-container1">
          <div className="image">
            <div className="image-27-parent">
              <img
                className="image-27-icon"
                alt=""
                id="social-link-img"
                src="/image-27@2x.png"
                onClick={onImage27Click}
              />
              <img
                className="image-27-icon"
                alt=""
                id="social-linlk-img"
                src="/image-28@2x.png"
                onClick={onImage28Click}
              />
            </div>
          </div>
        </div>
        <img className="vector-icon" alt="" src="/vector-200.svg" />
      </section>
      <ContainerButtonSection
        sectionZIndex="unset"
        onButtonClick={onButton1Click}
        onPrimaryClick={onPrimaryClick}
      />
      <section className="section7">
        <div className="container3">
          <h2 className="title11">© 2023 Author XYZ. All rights reserved.</h2>
        </div>
      </section>
    </div>
  );
};

export default ContactHifiDesktop;
