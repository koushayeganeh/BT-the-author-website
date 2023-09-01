import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CardContainer from "./CardContainer";
import "./UpcomingBooksContainer.css";
const UpcomingBooksContainer = () => {
  const navigate = useNavigate();

  const onRowContainerClick = useCallback(() => {
    navigate("/single-book");
  }, [navigate]);

  const onTitleClick = useCallback(() => {
    navigate("/library");
  }, [navigate]);

  return (
    <section className="section19" id="library-section">
      <div className="container9">
        <h1 className="title42" id="library-heading" onClick={onTitleClick}>
          Upcoming Books
        </h1>
      </div>
      <div className="list6">
        <CardContainer
          title="Book Title 1"
          subtitle="Subtitle 1"
          subtitle1="Summary 1"
          labelText="Mystery"
          labelText1="Mystery"
          labelText2="Mystery"
          labelText3="Mystery"
          onRowContainerClick={onRowContainerClick}
        />
        <div className="row6" onClick={onRowContainerClick}>
          <div className="article15">
            <div className="image-container13">
              <div className="image11" />
            </div>
            <div className="title-parent13">
              <div className="title43">Book Title 2</div>
              <div className="subtitle23">Subtitle 2</div>
              <div className="subtitle24">Summary 2</div>
              <div className="selection8">
                <div className="label-normal32">
                  <div className="label-text32">Thriller</div>
                </div>
                <div className="label-normal32">
                  <div className="label-text32">Thriller</div>
                </div>
                <div className="label-normal32">
                  <div className="label-text32">Thriller</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardContainer
          title="Book Title 3"
          subtitle="Subtitle 3"
          subtitle1="Summary 3"
          labelText="Suspense"
          labelText1="Suspense"
          labelText2="Suspense"
          labelText3="Suspense"
          propBackgroundImage="url('/image-container3@3x.png')"
          onRowContainerClick={onRowContainerClick}
        />
        <CardContainer
          title="Book Title 3"
          subtitle="Subtitle 3"
          subtitle1="Summary 3"
          labelText="Suspense"
          labelText1="Suspense"
          labelText2="Suspense"
          labelText3="Suspense"
          propBackgroundImage="url('/image-container4@3x.png')"
          onRowContainerClick={onRowContainerClick}
        />
      </div>
      <img className="section-child9" alt="" src="/vector-200.svg" />
    </section>
  );
};

export default UpcomingBooksContainer;
