import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import ContactAuthorFormContainer from "../components/ContactAuthorFormContainer";
import FooterContainer from "../components/FooterContainer";
import "./ContactHifiDesktop.css";
import ContactHeaderContainer from "../components/ContactHeaderContainer";
const ContactHifiDesktop = () => {
  const navigate = useNavigate();

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

  const onImage27Click = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onImage28Click = useCallback(() => {
    window.open("https://www.linkedin.com/");
  }, []);

  return (
    <div className="contact-hifi-desktop">
      <TopBar
        onTabText0Click={onTabText0Click}
        onTabText1Click={onTabText1Click}
        onTabText2Click={onTabText2Click}
        onTabText3Click={onTabText3Click}
        onTabText4Click={onTabText4Click}
      />
      <section className="page-header-container">
        <ContactHeaderContainer />
      </section>
      <ContactAuthorFormContainer />
      <FooterContainer />
    </div>
  );
};

export default ContactHifiDesktop;
