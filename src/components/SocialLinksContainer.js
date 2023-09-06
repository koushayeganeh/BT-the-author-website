import { useCallback } from "react";
import "./SocialLinksContainer.css";

import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";

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
            <ImFacebook2
              className="image-27-icon1"
              id="social-linlk-img"
              onClick={onImage27Click}
            />
            <ImLinkedin
              className="image-27-icon1"
              id="social-linlk-img"
              onClick={onImage28Click}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinksContainer;
