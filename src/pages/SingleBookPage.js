import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import TopBar from "../components/TopBar";
import FooterContainer from "../components/FooterContainer";
import bookData from "./bookData.js";
import "./SingleBookPage.css";

const SingleBookPage = () => {
  const navigate = useNavigate();

  // TOPBAR NAVIGATION LINKS

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

  const onRowContainerClick = useCallback(
    (bookID) => {
      navigate(`/blogs/${bookID}`);
    },
    [navigate]
  );

  const { bookID } = useParams();

  // Find the book object with a matching ID
  const book = bookData.find((item) => item.id === parseInt(bookID));

  if (!book) {
    return <div>Book not found.</div>;
  }

  const onPrimaryClick = useCallback(() => {
    navigate("/single-book-buy");
  }, [navigate]);

  return (
    <div className="single-book">
      <TopBar
        onTabText0Click={onTabText0Click}
        onTabText1Click={onTabText1Click}
        onTabText2Click={onTabText2Click}
        onTabText3Click={onTabText3Click}
        onTabText4Click={onTabText4Click}
      />
      <section className="section8" id="page-hero-section">
        <img
          className="image-container-icon3"
          alt=""
          id="page-hero-img"
          src="/image-container@2x.png"
        />
      </section>
      <section className="row3">
        <div className="article11">
          <div className="image-container-group">
            <div className="image-container8">
              <img className="image-icon1" alt="" src={book.img} />
            </div>
            <button className="button1">
              <button className="primary1" onClick={onPrimaryClick}>
                <div className="title29">BUY THIS BOOK</div>
              </button>
            </button>
          </div>
          <div className="title-parent8">
            <div className="title30">{book.title}</div>
            <div className="subtitle14">{book.subtitle}</div>
            <div className="subtitle15">
              <p className="at-vero-eos22">
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
              <p className="at-vero-eos22">&nbsp;</p>
              <p className="at-vero-eos22">
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
              <p className="at-vero-eos22">&nbsp;</p>
              <p className="at-vero-eos22">
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
      <FooterContainer />
    </div>
  );
};

export default SingleBookPage;
