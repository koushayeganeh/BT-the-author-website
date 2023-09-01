import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerButtonSection from "../components/ContainerButtonSection";
import ShoppingCard from "../components/ShoppingCard";
import "./SingleBookBUYHifiDes.css";
const SingleBookBUYHifiDes = () => {
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

  const onRectangleClick = useCallback(() => {
    navigate("/single-book");
  }, [navigate]);

  return (
    <div className="single-book-buy-hifi-des">
      <header className="top-bar1" id="header">
        <img className="top-bar-item" alt="" src="/rectangle-4137@2x.png" />
        <h3 className="title6" id="logo-typo">
          Barış Tayfün
        </h3>
        <nav className="navigation1" id="navbar">
          <div className="tab5" onClick={onTabTextClick}>
            Home
          </div>
          <div className="tab5" onClick={onTabText1Click}>
            Author
          </div>
          <div className="tab5" onClick={onTabText2Click}>
            Library
          </div>
          <div className="tab5" onClick={onTabText3Click}>
            Blog
          </div>
          <div className="tab5" onClick={onTabText4Click}>
            Contact
          </div>
        </nav>
      </header>
      <section className="section3" id="page-hero-section">
        <img
          className="image-container-icon1"
          alt=""
          id="page-hero-img"
          src="/image-container@2x.png"
        />
        <img className="section-inner" alt="" src="/vector-2002.svg" />
      </section>
      <section className="row">
        <div className="article1">
          <div className="image-container-parent">
            <div className="image-container">
              <img className="image-icon" alt="" src="/image@2x.png" />
            </div>
            <button className="button">
              <button className="primary">
                <div className="title7">BUY THIS BOOK</div>
              </button>
            </button>
          </div>
          <div className="title-parent">
            <div className="title8">Book Title 1</div>
            <div className="subtitle3">Subtitle 1</div>
            <div className="subtitle4">
              <p className="at-vero-eos10">
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat."
              </p>
              <p className="at-vero-eos10">&nbsp;</p>
              <p className="at-vero-eos10">
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat."
              </p>
              <p className="at-vero-eos10">&nbsp;</p>
              <p className="at-vero-eos10">
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat."
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContainerButtonSection
        sectionZIndex="3"
        onButtonClick={onButton1Click}
        onPrimaryClick={onPrimary1Click}
      />
      <section className="section4">
        <div className="container2">
          <div className="title9">© 2023 Author XYZ. All rights reserved.</div>
        </div>
      </section>
      <div
        className="single-book-buy-hifi-des-child"
        onClick={onRectangleClick}
      />
      <ShoppingCard />
    </div>
  );
};

export default SingleBookBUYHifiDes;
