import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerButtonSection from "../components/ContainerButtonSection";
import "./AuthorHifiDesktop.css";
const AuthorHifiDesktop = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
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

  return (
    <div className="author-hifi-desktop">
      <section className="section" id="author-hero-section">
        <img
          className="image-container-icon"
          alt=""
          id="author-hero-img"
          src="/image-container@2x.png"
        />
        <img className="section-child" alt="" src="/vector-200.svg" />
      </section>
      <section className="list" id="author-bio-section">
        <div className="article">
          <div className="article-inner">
            <div className="title-wrapper">
              <h1 className="title" id="author-bio-heading">
                Bio
              </h1>
            </div>
          </div>
          <img className="article-child" alt="" src="/vector-2001.svg" />
        </div>
        <p className="subtitle">
          <span className="at-vero-eos">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </span>
          <span className="at-vero-eos">&nbsp;</span>
          <span className="at-vero-eos">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </span>
          <span className="at-vero-eos">&nbsp;</span>
          <span className="at-vero-eos">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </span>
          <span className="at-vero-eos">&nbsp;</span>
        </p>
      </section>
      <section className="list1" id="author-inspiration-section">
        <h1 className="title1" id="author-inspiration-heading">
          Inspirations
        </h1>
        <p className="subtitle1">
          <span className="at-vero-eos">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </span>
          <span className="at-vero-eos">&nbsp;</span>
          <span className="at-vero-eos">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </span>
          <span className="at-vero-eos">&nbsp;</span>
          <span className="at-vero-eos">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </span>
        </p>
      </section>
      <section className="list2" id="author-influences-section">
        <h1 className="title1" id="author-influences-heading">
          Influence
        </h1>
        <p className="subtitle1">
          <span className="at-vero-eos">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </span>
          <span className="at-vero-eos">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </span>
          <span className="at-vero-eos">&nbsp;</span>
          <span className="at-vero-eos">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </span>
          <span className="at-vero-eos">&nbsp;</span>
          <span className="at-vero-eos">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </span>
          <span className="at-vero-eos">&nbsp;</span>
        </p>
      </section>
      <section className="section1" id="author-desk-section">
        <div className="container">
          <h1 className="title1" id="author-desk-heading">
            Desk
          </h1>
          <div className="card">
            <img
              className="image-11-icon"
              alt=""
              id="author-desk-img"
              src="/image-11@2x.png"
            />
          </div>
        </div>
        <img className="section-child" alt="" src="/vector-200.svg" />
      </section>
      <ContainerButtonSection
        onButtonClick={onButtonClick}
        onPrimaryClick={onPrimaryClick}
      />
      <section className="section2" id="footer">
        <div className="container1">
          <div className="title4">© 2023 Author XYZ. All rights reserved.</div>
        </div>
      </section>
      <header className="top-bar" id="header">
        <img className="top-bar-child" alt="" src="/rectangle-4137@2x.png" />
        <h3 className="title5" id="logo-typo">
          Barış Tayfün
        </h3>
        <nav className="navigation" id="navbar">
          <div className="tab" onClick={onTabTextClick}>
            Home
          </div>
          <div className="tab" onClick={onTabText1Click}>
            Author
          </div>
          <div className="tab" onClick={onTabText2Click}>
            Library
          </div>
          <div className="tab" onClick={onTabText3Click}>
            Blog
          </div>
          <div className="tab" onClick={onTabText4Click}>
            Contact
          </div>
        </nav>
      </header>
    </div>
  );
};

export default AuthorHifiDesktop;
