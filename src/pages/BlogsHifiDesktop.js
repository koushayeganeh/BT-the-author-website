import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import ContainerButtonSection from "../components/ContainerButtonSection";
import "./BlogsHifiDesktop.css";
const BlogsHifiDesktop = () => {
  const navigate = useNavigate();

  const onArticleContainer3Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer4Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer5Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer6Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer7Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer8Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer9Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer10Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer11Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

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

  const onArticleContainerClick = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer1Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  const onArticleContainer2Click = useCallback(() => {
    navigate("/single-blog");
  }, [navigate]);

  return (
    <div className="blogs-hifi-desktop">
      <header className="top-bar4" id="header">
        <img className="top-bar-child1" alt="" src="/rectangle-4137@2x.png" />
        <h3 className="title21" id="logo-typo">
          Barış Tayfün
        </h3>
        <nav className="navigation4" id="navbar">
          <div className="tab20" onClick={onTabTextClick}>
            Home
          </div>
          <div className="tab20" onClick={onTabText1Click}>
            Author
          </div>
          <div className="tab20" onClick={onTabText2Click}>
            Library
          </div>
          <div className="tab20" onClick={onTabText3Click}>
            Blog
          </div>
          <div className="tab20" onClick={onTabText4Click}>
            Contact
          </div>
        </nav>
      </header>
      <section className="section10" id="page-hero-section">
        <img
          className="image-container-icon4"
          alt=""
          id="page-hero-img"
          src="/image-container@2x.png"
        />
        <img className="section-child3" alt="" src="/vector-2002.svg" />
      </section>
      <section className="frame-section">
        <h1 className="title22">Featured Articles</h1>
        <div className="row2">
          <div className="article8" onClick={onArticleContainerClick}>
            <div className="image-container5">
              <div className="image4">
                <img className="image-21-icon3" alt="" src="/image-21@2x.png" />
              </div>
            </div>
            <div className="title-parent4">
              <h2 className="title23">Article 1</h2>
              <div className="subtitle11">Aug 20, 2023</div>
              <div className="selection3">
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
              </div>
            </div>
          </div>
          <div className="article8" onClick={onArticleContainer1Click}>
            <div className="image-container5">
              <div className="image4">
                <img
                  className="image-21-icon3"
                  alt=""
                  src="/image-213@2x.png"
                />
              </div>
            </div>
            <div className="title-parent4">
              <h2 className="title23">Article 1</h2>
              <div className="subtitle11">Aug 20, 2023</div>
              <div className="selection3">
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
              </div>
            </div>
          </div>
          <div className="article8" onClick={onArticleContainer2Click}>
            <div className="image-container5">
              <div className="image4">
                <img
                  className="image-21-icon3"
                  alt=""
                  src="/image-212@2x.png"
                />
              </div>
            </div>
            <div className="title-parent4">
              <h2 className="title23">Article 1</h2>
              <div className="subtitle11">Aug 20, 2023</div>
              <div className="selection3">
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
                <div className="label-normal12">
                  <div className="label-text12">Mystery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="frame-section">
        <h1 className="title22">Recent Articles</h1>
        <ArticleCard
          onArticleContainer3Click={onArticleContainer3Click}
          onArticleContainer4Click={onArticleContainer4Click}
          onArticleContainer5Click={onArticleContainer5Click}
        />
        <ArticleCard
          onArticleContainer3Click={onArticleContainer6Click}
          onArticleContainer4Click={onArticleContainer7Click}
          onArticleContainer5Click={onArticleContainer8Click}
        />
        <ArticleCard
          onArticleContainer3Click={onArticleContainer9Click}
          onArticleContainer4Click={onArticleContainer10Click}
          onArticleContainer5Click={onArticleContainer11Click}
        />
      </section>
      <ContainerButtonSection
        sectionZIndex="unset"
        onButtonClick={onButtonClick}
        onPrimaryClick={onPrimaryClick}
      />
      <section className="section11">
        <div className="container5">
          <h2 className="title27">© 2023 Author XYZ. All rights reserved.</h2>
        </div>
      </section>
    </div>
  );
};

export default BlogsHifiDesktop;
