import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import HeroSection from "../components/HeroSection";
import AboutCard from "../components/AboutCard";
import UpcomingEventCard from "../components/UpcomingEventCard";
import UpcomingBooksContainer from "../components/UpcomingBooksContainer";
import QuoteCardForm from "../components/QuoteCardForm";
import ContactAuthorFormContainer from "../components/ContactAuthorFormContainer";
import FooterContainer from "../components/FooterContainer";
import "./HomeHifiDesktop.css";
const HomeHifiDesktop = () => {
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

  const onRowContainerClick = useCallback(() => {
    navigate("/single-book");
  }, [navigate]);

  return (
    <div className="home-hifi-desktop">
      <TopBar
        onTabText0Click={onTabText0Click}
        onTabText1Click={onTabText1Click}
        onTabText2Click={onTabText2Click}
        onTabText3Click={onTabText3Click}
        onTabText4Click={onTabText4Click}
      />
      <section className="page-header-container page-header-container-home-overide">
        <HeroSection />
      </section>
      <AboutCard />
      <UpcomingEventCard />
      <UpcomingBooksContainer />
      <QuoteCardForm />
      <ContactAuthorFormContainer />
      <FooterContainer />
    </div>
  );
};

export default HomeHifiDesktop;
