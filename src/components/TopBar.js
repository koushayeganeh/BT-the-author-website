import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { GiWhiteBook, GiSpellBook } from "react-icons/gi";

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const TopBarContainer = styled.header`
  margin: 0 !important;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-9xl);
  color: var(--secondary);
  font-family: var(--font-sans-serif);
  width: 100%;
  top: 0;
  position: fixed;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  height: 5rem;
  overflow: hidden;
  flex-shrink: 0;
  padding: var(--padding-xl) var(--padding-71xl);
  box-sizing: border-box;
  z-index: 1000;
  font-size: var(--font-size-9xl);

  @media (max-width: 960px) {
    padding: var(--padding-13xl) 1rem;
    gap: var(--gap-base);
    font-size: var(--font-size-9xl);
  }
`;

const TopBarContent = styled.div`
  margin: 0;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  max-width: var(--max-inner-width);
  top: 0;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
`;

const LogoImage = styled.img`
  position: relative;
  border-radius: var(--br-81xl);
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  justify-self: center;
  align-self: center;

  &:hover {
    border: 4px solid var(--primary);
    box-sizing: border-box;
    cursor: pointer;
  }
`;

const Title = styled.h3`
  position: relative;
  font-weight: 500;
  justify-self: center;
  align-self: center;
  margin: 0;
  line-height: 2.25rem;
  font-family: var(--font-serif);
  font-weight: 600;
  padding: 4rem 1rem;
  font-size: var(--font-size-title-larg);

  &:hover {
    color: var(--primary);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-title-small);
  }
`;

const Navigation = styled.nav`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  text-align: left;
  font-size: 1.5rem;
  color: var(--secondary);
  font-family: var(--font-sans-serif);

  @media (max-width: 905px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    display: none;
    padding: var(--padding-13xl) var(--padding-13xl);
  }
`;

const Tab = styled.div`
  position: relative;
  font-weight: 500;
  padding: 4rem 1.5rem;

  &:hover {
    color: var(--white);
    background-color: var(--primary);
  }

  letter-spacing: 0.1px;
  line-height: 1.25rem;
  cursor: pointer;

  @media (max-width: 905px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 768px) {
    color: var(--primary);
    border-radius: 6px;
    background-color: var(--secondary);

    &:hover {
      background-color: var(--white);
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 2rem;
    padding-top: 0.5rem;
  }
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary);
  opacity: 0.95;
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1000;
  overflow: hidden;
  transform: translateY(${(props) => (props.showMenu ? "0" : "-100%")});
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  ${({ showMenu }) =>
    showMenu
      ? css`
          display: block;
          animation: ${slideIn} 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        `
      : css`
          display: block;
          animation: ${slideOut} 0.3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        `}

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

const MobileTab = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: rgba(10, 10, 10, 0.1);
  border-radius: 8px;

  &:hover {
    background-color: var(--white);
    color: var(--primary);
  }
`;

const TopBar = ({
  rectangleIconZIndex,
  onTabText0Click,
  onTabText1Click,
  onTabText2Click,
  onTabText3Click,
  onTabText4Click,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <TopBarContainer
      showMenu={showMenu}
      className={showMenu ? "mobile-menu-open" : ""}
    >
      <TopBarContent>
        <LogoContainer onClick={onTabText0Click}>
          <LogoImage alt="" src="/rectangle-4137@2x.png" />
          <Title id="logo-typo">Barış Tayfün</Title>
        </LogoContainer>
        <Navigation>
          <Tab onClick={onTabText0Click}>Ana</Tab>
          <Tab onClick={onTabText1Click}>Yazar</Tab>
          <Tab onClick={onTabText2Click}>Kütüphane</Tab>
          <Tab onClick={onTabText3Click}>Blog</Tab>
          <Tab onClick={onTabText4Click}>İletişim</Tab>
        </Navigation>
        <HamburgerIcon onClick={toggleMenu}>
          {showMenu ? <GiSpellBook /> : <GiWhiteBook />}
        </HamburgerIcon>
      </TopBarContent>
      {showMenu && (
        <MobileMenuOverlay showMenu={showMenu} onClick={closeMenu}>
          <MobileMenu>
            <MobileTab onClick={onTabText0Click}>Ana</MobileTab>
            <MobileTab onClick={onTabText1Click}>Yazar</MobileTab>
            <MobileTab onClick={onTabText2Click}>Kütüphane</MobileTab>
            <MobileTab onClick={onTabText3Click}>Blog</MobileTab>
            <MobileTab onClick={onTabText4Click}>İletişim</MobileTab>
          </MobileMenu>
        </MobileMenuOverlay>
      )}
    </TopBarContainer>
  );
};

export default TopBar;
