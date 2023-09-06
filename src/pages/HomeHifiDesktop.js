import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import HeroContainer from "../components/HeroContainer";
import AboutCard from "../components/AboutCard";
import UpcomingEventCard from "../components/UpcomingEventCard";
import UpcomingBooksContainer from "../components/UpcomingBooksContainer";
import QuoteCardForm from "../components/QuoteCardForm";
import ContactAuthorFormContainer from "../components/ContactAuthorFormContainer";
import SocialLinksContainer from "../components/SocialLinksContainer";
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
      <HeroContainer />
      <AboutCard />
      <UpcomingEventCard />
      <UpcomingBooksContainer />
      <QuoteCardForm />
      <ContactAuthorFormContainer />
      <SocialLinksContainer />
      <FooterContainer />
    </div>
  );
};

export default HomeHifiDesktop;
