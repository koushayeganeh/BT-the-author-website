import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerButtonSection from "../components/ContainerButtonSection";
import "./SingleBookHifiDesktop.css";
const SingleBookHifiDesktop = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPrimary1Click = useCallback(() => {
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

  const onPrimaryClick = useCallback(() => {
    navigate("/single-book-buy");
  }, [navigate]);

  return (
    <div className="single-book-hifi-desktop">
      <div className="single-book-buy-hifi-des1">
        <header className="top-bar5" id="header">
          <img className="top-bar-child2" alt="" src="/rectangle-4137@2x.png" />
          <h3 className="title28" id="logo-typo">
            Barış Tayfün
          </h3>
          <nav className="navigation5" id="navbar">
            <div className="tab25" onClick={onTabTextClick}>
              Home
            </div>
            <div className="tab25" onClick={onTabText1Click}>
              Author
            </div>
            <div className="tab25" onClick={onTabText2Click}>
              Library
            </div>
            <div className="tab25" onClick={onTabText3Click}>
              Blog
            </div>
            <div className="tab25" onClick={onTabText4Click}>
              Contact
            </div>
          </nav>
        </header>
        <section className="section12" id="page-hero-section">
          <img
            className="image-container-icon5"
            alt=""
            id="page-hero-img"
            src="/image-container@2x.png"
          />
          <img className="section-child4" alt="" src="/vector-2002.svg" />
        </section>
        <section className="row3">
          <div className="article11">
            <div className="image-container-group">
              <div className="image-container8">
                <img className="image-icon1" alt="" src="/image@2x.png" />
              </div>
              <button className="button1">
                <button className="primary1" onClick={onPrimaryClick}>
                  <div className="title29">BUY THIS BOOK</div>
                </button>
              </button>
            </div>
            <div className="title-parent8">
              <div className="title30">Book Title 1</div>
              <div className="subtitle14">Subtitle 1</div>
              <div className="subtitle15">
                <p className="at-vero-eos22">
                  "At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident, similique sunt in culpa qui officia
                  deserunt mollitia animi, id est laborum et dolorum fuga. Et
                  harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat."
                </p>
                <p className="at-vero-eos22">&nbsp;</p>
                <p className="at-vero-eos22">
                  "At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident, similique sunt in culpa qui officia
                  deserunt mollitia animi, id est laborum et dolorum fuga. Et
                  harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat."
                </p>
                <p className="at-vero-eos22">&nbsp;</p>
                <p className="at-vero-eos22">
                  "At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti
                  quos dolores et quas molestias excepturi sint occaecati
                  cupiditate non provident, similique sunt in culpa qui officia
                  deserunt mollitia animi, id est laborum et dolorum fuga. Et
                  harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus. Temporibus autem quibusdam et aut officiis
                  debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae.
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat."
                </p>
              </div>
            </div>
          </div>
        </section>
        <ContainerButtonSection
          sectionZIndex="unset"
          onButtonClick={onButton1Click}
          onPrimaryClick={onPrimary1Click}
        />
        <section className="section13">
          <div className="container6">
            <div className="title31">
              © 2023 Author XYZ. All rights reserved.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleBookHifiDesktop;
