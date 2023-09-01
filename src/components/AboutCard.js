import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutCard.css";
const AboutCard = () => {
  const navigate = useNavigate();

  const onPrimaryContainerClick = useCallback(() => {
    navigate("/author");
  }, [navigate]);

  return (
    <section className="list4" id="bio-section">
      <div className="article13">
        <div className="image-container11">
          <div className="image9">
            <img
              className="image-7-icon"
              alt=""
              id="bio-img"
              src="/image-7@2x.png"
            />
          </div>
        </div>
        <div className="frame-parent">
          <div className="title-parent10">
            <div className="title37">About</div>
            <div className="subtitle18">
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat."
            </div>
          </div>
          <button className="button3" id="button-read-more">
            <div className="primary3" onClick={onPrimaryContainerClick}>
              <div className="title38">Read More</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
