import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import ArticleCard from "../components/ArticleCard";
import FooterContainer from "../components/FooterContainer";
import BlogsHeaderContainer from "../components/BlogsHeaderContainer";
import "./BlogsHifiDesktop.css";
const BlogsHifiDesktop = () => {
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

  // BLOGS NAVIGATION LINKS

  const onArticleContainer3Click = useCallback(
    (blogID) => {
      navigate(`/blogs/${blogID}`);
    },
    [navigate]
  );

  return (
    <div className="blogs-hifi-desktop">
      <TopBar
        onTabText0Click={onTabText0Click}
        onTabText1Click={onTabText1Click}
        onTabText2Click={onTabText2Click}
        onTabText3Click={onTabText3Click}
        onTabText4Click={onTabText4Click}
      />
      <section className="page-header-container">
        <BlogsHeaderContainer />
      </section>
      <div className="blogs-main-container">
        <section className="frame-section">
          <h1 className="title22">Featured Articles</h1>
          <div className="blogs-container">
            <ArticleCard
              blogID="1"
              title="Fiziksel Varlığın Temel Rolü"
              date="Aug 20, 2023"
              labelText="Tarih"
              labelText1="Dram"
              labelText2="Sosyal"
              labelText3="Politik"
              propBackgroundImage="url('/image-213@2x.png')"
              onArticleContainer3Click={() => onArticleContainer3Click(1)}
            />
            <ArticleCard
              blogID="2"
              title="featured blog number 2"
              date="Aug 20, 2023"
              labelText="Tarih"
              labelText1="Dram"
              labelText2="Sosyal"
              labelText3="Politik"
              propBackgroundImage="url('/image-213@2x.png')"
              onArticleContainer3Click={() => onArticleContainer3Click(2)}
            />
          </div>
        </section>
        <section className="frame-section">
          <h1 className="title22">Recent Articles</h1>
          <div className="blogs-container">
            <ArticleCard
              title="blog number 1"
              date="Aug 20, 2023"
              labelText="Tarih"
              labelText1="Dram"
              labelText2="Sosyal"
              labelText3="Politik"
              propBackgroundImage="url('/image-213@2x.png')"
              onArticleContainer3Click={onArticleContainer3Click}
            />
            <ArticleCard
              title="blog number 2"
              date="Aug 20, 2023"
              labelText="Tarih"
              labelText1="Dram"
              labelText2="Sosyal"
              labelText3="Politik"
              propBackgroundImage="url('/image-213@2x.png')"
              onArticleContainer3Click={onArticleContainer3Click}
            />
            <ArticleCard
              title="blog number 3"
              date="Aug 20, 2023"
              labelText="Tarih"
              labelText1="Dram"
              labelText2="Sosyal"
              labelText3="Politik"
              propBackgroundImage="url('/image-213@2x.png')"
              onArticleContainer3Click={onArticleContainer3Click}
            />
            <ArticleCard
              title="blog number 4"
              date="Aug 20, 2023"
              labelText="Tarih"
              labelText1="Dram"
              labelText2="Sosyal"
              labelText3="Politik"
              propBackgroundImage="url('/image-213@2x.png')"
              onArticleContainer3Click={onArticleContainer3Click}
            />
            <ArticleCard
              title="blog number 5"
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

export default BlogsHifiDesktop;
