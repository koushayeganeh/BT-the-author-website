import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import TopBar from "../components/TopBar";
import FooterContainer from "../components/FooterContainer";
import ArticleCard from "../components/ArticleCard";
import blogData from "./blogData.js";
import "./SingleBlogPage.css";

const SingleBlogPage = () => {
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

  const onArticleContainer3Click = useCallback(
    (blogID) => {
      navigate(`/blogs/${blogID}`);
    },
    [navigate]
  );

  const { blogID } = useParams();

  // Find the blog object with a matching ID
  const blog = blogData.find((item) => item.id === parseInt(blogID));

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="single-blog">
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
      <section className="list4" id="bio-section">
        <div className="article13">
          <div className="frame-parent">
            <div className="title-parent10">{blog.contentJSX}</div>
          </div>
        </div>
      </section>
      <div className="blogs-main-container">
        <section className="frame-section">
          <h1 className="title22">Other Suggested Blogs</h1>
          <div className="blogs-container">
            <ArticleCard
              blogID="1"
              title="featured blog number 1"
              date="Aug 20, 2023"
              labelText="Tarih"
              labelText1="Dram"
              labelText2="Sosyal"
              labelText3="Politik"
              propBackgroundImage="url('/image-213@2x.png')"
              onArticleContainer3Click={() => onArticleContainer3Click(1)}
            />
            <ArticleCard
              title="featured blog number 2"
              date="Aug 20, 2023"
              labelText="Tarih"
              labelText1="Dram"
              labelText2="Sosyal"
              labelText3="Politik"
              propBackgroundImage="url('/image-213@2x.png')"
              onArticleContainer3Click={onArticleContainer3Click}
            />
            <ArticleCard
              title="featured blog number 2"
              date="Aug 20, 2023"
              labelText="Tarih"
              labelText1="Dram"
              labelText2="Sosyal"
              labelText3="Politik"
              propBackgroundImage="url('/image-213@2x.png')"
              onArticleContainer3Click={onArticleContainer3Click}
            />
          </div>
        </section>
      </div>
      <FooterContainer />
    </div>
  );
};

export default SingleBlogPage;
