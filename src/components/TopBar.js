import { useState } from "react";
import "./TopBar.css";
import { GiWhiteBook } from "react-icons/gi";
import { GiSpellBook } from "react-icons/gi";

const TopBar = ({
  rectangleIconZIndex,
  onTabText0Click,
  onTabText1Click,
  onTabText2Click,
  onTabText3Click,
  onTabText4Click,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const topBarStyle = {
    zIndex: rectangleIconZIndex,
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header
      className={`top-bar7 ${showMenu ? "mobile-menu-open" : ""}`}
      id="header"
      style={topBarStyle}
    >
      <div className="top-bar7-content">
        <div className="logo-container">
          <img className="top-bar-child4" alt="" src="/rectangle-4137@2x.png" />
          <h3 className="title36" id="logo-typo">
            Barış Tayfün
          </h3>
        </div>
        <nav
          className={`navigation7 ${showMenu ? "mobile-menu" : ""}`}
          id="navbar"
        >
          <div className="tab36" onClick={onTabText0Click}>
            Ana
          </div>
          <div className="tab36" onClick={onTabText1Click}>
            Yazar
          </div>
          <div className="tab36" onClick={onTabText2Click}>
            Kütüphane
          </div>
          <div className="tab36" onClick={onTabText3Click}>
            Blog
          </div>
          <div className="tab36" onClick={onTabText4Click}>
            İletişim
          </div>
        </nav>
        {/* Hamburger Menu Icon */}
        <div className={`hamburger-icon`} onClick={toggleMenu}>
          {showMenu ? <GiSpellBook /> : <GiWhiteBook />}
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {showMenu && (
        <div
          className={`mobile-menu-overlay`}
          id="mobile-navbar"
          onClick={closeMenu}
        >
          <nav className={`mobile-menu`}>
            <div className="tab36" onClick={onTabText0Click}>
              Ana
            </div>
            <div className="tab36" onClick={onTabText1Click}>
              Yazar
            </div>
            <div className="tab36" onClick={onTabText2Click}>
              Kütüphane
            </div>
            <div className="tab36" onClick={onTabText3Click}>
              Blog
            </div>
            <div className="tab36" onClick={onTabText4Click}>
              İletişim
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default TopBar;
