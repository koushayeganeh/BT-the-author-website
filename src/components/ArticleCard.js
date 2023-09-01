import "./ArticleCard.css";
const ArticleCard = ({
  onArticleContainer3Click,
  onArticleContainer4Click,
  onArticleContainer5Click,
}) => {
  return (
    <div className="row7">
      <div className="article16" onClick={onArticleContainer3Click}>
        <div className="image-container16">
          <div className="image14">
            <img className="image-21-icon6" alt="" src="/image-21@2x.png" />
          </div>
        </div>
        <div className="title-parent14">
          <h2 className="title57">Article 1</h2>
          <div className="subtitle25">Aug 20, 2023</div>
          <div className="selection9">
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
          </div>
        </div>
      </div>
      <div className="article16" onClick={onArticleContainer4Click}>
        <div className="image-container16">
          <div className="image14">
            <img className="image-21-icon6" alt="" src="/image-213@2x.png" />
          </div>
        </div>
        <div className="title-parent14">
          <h2 className="title57">Article 1</h2>
          <div className="subtitle25">Aug 20, 2023</div>
          <div className="selection9">
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
          </div>
        </div>
      </div>
      <div className="article16" onClick={onArticleContainer5Click}>
        <div className="image-container16">
          <div className="image14">
            <img className="image-21-icon6" alt="" src="/image-212@2x.png" />
          </div>
        </div>
        <div className="title-parent14">
          <h2 className="title57">Article 1</h2>
          <div className="subtitle25">Aug 20, 2023</div>
          <div className="selection9">
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
            <div className="label-normal35">
              <div className="label-text35">Mystery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
