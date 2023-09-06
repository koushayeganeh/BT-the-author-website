import { useMemo } from "react";
import "./TopBar.css";
const TopBar = ({
  rectangleIconZIndex,
  onTabText0Click,
  onTabText1Click,
  onTabText2Click,
  onTabText3Click,
  onTabText4Click,
}) => {
  const topBarStyle = useMemo(() => {
    return {
      zIndex: rectangleIconZIndex,
    };
  }, [rectangleIconZIndex]);

  return (
    <header className="top-bar7" id="header" style={topBarStyle}>
      <div className="top-bar7-content">
        <img className="top-bar-child4" alt="" src="/rectangle-4137@2x.png" />
        <h3 className="title36" id="logo-typo">
          Barış Tayfün
        </h3>
        <nav className="navigation7" id="navbar">
          <div className="tab36" onClick={onTabText0Click}>
            Home
          </div>
          <div className="tab36" onClick={onTabText1Click}>
            Author
          </div>
          <div className="tab36" onClick={onTabText2Click}>
            Library
          </div>
          <div className="tab36" onClick={onTabText3Click}>
            Blog
          </div>
          <div className="tab36" onClick={onTabText4Click}>
            Contact
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
