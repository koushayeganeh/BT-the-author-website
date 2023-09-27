import React, { useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { ImFacebook2, ImLinkedin } from "react-icons/im";

const changeColor = keyframes`
  0% {
    color: var(--primary);
  }
  to {
    color: var(--secondary);
  }
`;

const changeColorOut = keyframes`
  0% {
    color: var(--secondary);
  }
  to {
    color: var(--primary);
  }
`;

const Section = styled.section`
  width: 100%;
  align-self: stretch;
  background-color: var(--grey);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding-left: 100px;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  gap: var(--gap-41xl);

  @media (max-width: 960px) {
    padding-left: 2rem;
  }

  @media (max-width: 768px) {
    padding: 0;
    padding-top: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--gap-15xl);
  width: 100%;
`;

const ImageGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--gap-15xl);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--white);
  padding: var(--padding-22xl) var(--padding-12xl);
  width: 100%;
`;

const Icon = styled.div`
  position: relative;
  width: 6.25rem;
  height: 6.25rem;
  font-size: 6.25rem;
  object-fit: cover;
  cursor: pointer;
  color: var(--primary);

  &:hover {
    animation: 0.4s ease-in-out 0s 1 forwards ${changeColor};
  }

  &:not(:hover) {
    animation: 0.2s ease-in-out 0s 1 forwards ${changeColorOut};
  }
`;

const SocialLinksContainer = () => {
  const onImage27Click = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onImage28Click = useCallback(() => {
    window.open("https://www.linkedin.com/");
  }, []);

  return (
    <Section id="social-links">
      <ImageContainer>
        <Image>
          <ImageGroup>
            <Icon id="social-link-img" onClick={onImage27Click}>
              <ImFacebook2 />
            </Icon>
            <Icon id="social-link-img" onClick={onImage28Click}>
              <ImLinkedin />
            </Icon>
          </ImageGroup>
        </Image>
      </ImageContainer>
    </Section>
  );
};

export default SocialLinksContainer;
