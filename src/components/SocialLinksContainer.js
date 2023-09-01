import { useCallback } from "react";
import "./SocialLinksContainer.css";
const SocialLinksContainer = () => {
  const onImage27Click = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onImage28Click = useCallback(() => {
    window.open("https://www.linkedin.com/");
  }, []);

  return (
    <section className="section22" id="social-links">
      <div className="image-container14">
        <div className="image12">
          <div className="image-27-group">
            <img
              className="image-27-icon1"
              alt=""
              id="social-link-img"
              src="/image-27@2x.png"
              onClick={onImage27Click}
            />
            <img
              className="image-27-icon1"
              alt=""
              id="social-linlk-img"
              src="/image-28@2x.png"
              onClick={onImage28Click}
            />
          </div>
        </div>
      </div>
      <img className="section-child12" alt="" src="/vector-200.svg" />
    </section>
  );
};

export default SocialLinksContainer;
