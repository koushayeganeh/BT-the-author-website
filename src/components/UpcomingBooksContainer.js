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
      <div className="section19-inner-content">
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
      </div>
    </section>
  );
};

export default UpcomingBooksContainer;
