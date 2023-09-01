import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerButtonSection from "../components/ContainerButtonSection";
import "./SingleBlogHifiDesktop.css";
const SingleBlogHifiDesktop = () => {
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

  const onArticleContainer3Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer4Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer5Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  return (
    <div className="single-blog-hifi-desktop">
      <header className="top-bar3" id="header">
        <img className="rectangle-icon" alt="" src="/rectangle-4137@2x.png" />
        <h3 className="title12" id="logo-typo">
          Barış Tayfün
        </h3>
        <nav className="navigation3" id="navbar">
          <div className="tab15" onClick={onTabTextClick}>
            Home
          </div>
          <div className="tab15" onClick={onTabText1Click}>
            Author
          </div>
          <div className="tab15" onClick={onTabText2Click}>
            Library
          </div>
          <div className="tab15" onClick={onTabText3Click}>
            Blog
          </div>
          <div className="tab15" onClick={onTabText4Click}>
            Contact
          </div>
        </nav>
      </header>
      <section className="section8" id="page-hero-section">
        <img
          className="image-container-icon3"
          alt=""
          id="page-hero-img"
          src="/image-container@2x.png"
        />
        <img className="section-child2" alt="" src="/vector-2002.svg" />
      </section>
      <section className="list3">
        <div className="article2">
          <div className="frame-div">
            <div className="title-container">
              <h1 className="title13">Heading 1</h1>
            </div>
          </div>
          <img className="article-item" alt="" src="/vector-2001.svg" />
        </div>
        <p className="subtitle5">
          <span className="at-vero-eos13">
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
          <span className="at-vero-eos13">&nbsp;</span>
          <span className="at-vero-eos13">
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
          <span className="at-vero-eos13">&nbsp;</span>
          <span className="at-vero-eos13">
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
          <span className="at-vero-eos13">&nbsp;</span>
        </p>
        <div className="article2">
          <div className="frame-div">
            <div className="title-container">
              <h1 className="title13">Heading 2</h1>
            </div>
          </div>
          <img className="article-item" alt="" src="/vector-2001.svg" />
        </div>
        <p className="subtitle5">
          <span className="at-vero-eos13">
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
          <span className="at-vero-eos13">&nbsp;</span>
          <span className="at-vero-eos13">
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
          <span className="at-vero-eos13">&nbsp;</span>
          <span className="at-vero-eos13">
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
          <span className="at-vero-eos13">&nbsp;</span>
        </p>
        <div className="article2">
          <div className="frame-div">
            <div className="title-container">
              <h1 className="title13">Heading 3</h1>
            </div>
          </div>
          <img className="article-item" alt="" src="/vector-2001.svg" />
        </div>
        <p className="subtitle5">
          <span className="at-vero-eos13">
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
          <span className="at-vero-eos13">&nbsp;</span>
          <span className="at-vero-eos13">
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
          <span className="at-vero-eos13">&nbsp;</span>
          <span className="at-vero-eos13">
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
          <span className="at-vero-eos13">&nbsp;</span>
        </p>
      </section>
      <section className="title-group">
        <h1 className="title16">Suggested Articles</h1>
        <div className="row1">
          <div className="article5" onClick={onArticleContainer3Click}>
            <div className="image-container2">
              <div className="image1">
                <img className="image-21-icon" alt="" src="/image-21@2x.png" />
              </div>
            </div>
            <div className="title-parent1">
              <h2 className="title17">Article 1</h2>
              <div className="subtitle8">Aug 20, 2023</div>
              <div className="selection">
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
              </div>
            </div>
          </div>
          <div className="article5" onClick={onArticleContainer4Click}>
            <div className="image-container2">
              <div className="image1">
                <img className="image-21-icon" alt="" src="/image-211@2x.png" />
              </div>
            </div>
            <div className="title-parent1">
              <h2 className="title17">Article 1</h2>
              <div className="subtitle8">Aug 20, 2023</div>
              <div className="selection">
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
              </div>
            </div>
          </div>
          <div className="article5" onClick={onArticleContainer5Click}>
            <div className="image-container2">
              <div className="image1">
                <img className="image-21-icon" alt="" src="/image-212@2x.png" />
              </div>
            </div>
            <div className="title-parent1">
              <h2 className="title17">Article 1</h2>
              <div className="subtitle8">Aug 20, 2023</div>
              <div className="selection">
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
                <div className="label-normal">
                  <div className="label-text">Mystery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContainerButtonSection
        sectionZIndex="unset"
        onButtonClick={onButtonClick}
        onPrimaryClick={onPrimaryClick}
      />
      <section className="section9">
        <div className="container4">
          <h2 className="title20">© 2023 Author XYZ. All rights reserved.</h2>
        </div>
      </section>
    </div>
  );
};

export default SingleBlogHifiDesktop;
