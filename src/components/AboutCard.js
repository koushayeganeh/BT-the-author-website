import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

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

const shadowInsetCenter = keyframes`
  0% {
    box-shadow: inset 0 0 0 0 transparent;
    background-color: var(--primary);
  }
  to {
    box-shadow: inset 0 0 14px 0 rgb(0 0 0/50%);
    background-color: var(--polar);
  }
  `;

const shadowInsetCenterOut = keyframes`
  0% {
    box-shadow: inset 0 0 14px 0 rgb(0 0 0/50%);
    background-color: var(--polar);
  }
  to {
    box-shadow: inset 0 0 0 0 transparent;
    background-color: var(--primary);
  }
`;

const shadowInsetCenterAnimation = css`
  animation: 0.4s ease-in-out 0s 1 forwards ${shadowInsetCenter};
  opacity: 1;
`;

const shadowInsetCenterOutAnimation = css`
  animation: 0.2s ease-in-out 0s 1 forwards ${shadowInsetCenterOut};
  opacity: 1;
`;

const ArticleContainer = styled.section`
  align-self: stretch;
  display: flex;
  justify-content: center;
  background-color: var(--grey);
  flex-direction: column;
  padding: var(--padding-45xl) var(--padding-71xl);
  align-items: center;
  justify-content: center;
  z-index: 2;
  text-align: left;
  font-size: var(--title-large-size);
  color: var(--color-black);
  font-family: var(--title-medium);

  @media (max-width: 960px) {
    padding: var(--padding-13xl) var(--padding-13xl);
  }

  @media (max-width: 768px) {
    padding: 0 var(--padding-5xs);
    padding-bottom: var(--padding-13xl);
  }
`;

const ArticleInnerContainer = styled.section`
  align-self: stretch;
  display: flex;
  justify-content: center;
  border-radius: var(--br-5xs);
  background-color: var(--white);
  flex-direction: row;
  padding: var(--padding-base);
  align-items: flex-start;
  align-self: center;
  gap: var(--gap-xl);
  mix-blend-mode: normal;
  width: 100%;
  max-width: var(--max-inner-width);
  top: 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: var(--padding-5xs);
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 18.13rem;
  height: 20rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageInnerContainer = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  background-color: var(--color-gray-100);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 19rem;
  height: 20.56rem;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  align-items: flex-end;
  gap: var(--gap-13xl);
`;

const TitleParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Title = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-title-large);
  line-height: var(--font-size-title-large-heigth);
  font-family: var(--font-sans-serif);

  @media (max-width: 960px) {
    font-size: var(--font-size-title-medium);
    line-height: var(--font-size-title-medium-heigth);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-title-small);
    line-height: var(--font-size-title-small-heigth);
  }
`;

const Subtitle = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-title-large);
  line-height: var(--font-size-title-large-heigth);
  font-family: var(--font-sans-serif);
  font-size: var(--font-size-read-large);
  line-height: var(--font-size-read-large-height);
  font-family: var(--font-serif);
  letter-spacing: 0.5px;

  @media (max-width: 960px) {
    font-size: var(--font-size-read-medium);
    letter-spacing: 0.25px;
    line-height: var(--font-size-read-medium-height);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-read-small);
    line-height: var(--font-size-read-small-height);
    letter-spacing: 0.25px;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 0;
  padding: 0;
  overflow: hidden;
  align-items: flex-start;

  border-radius: var(--br-5xs);
  width: 11.63rem;
  height: 3.88rem;
  padding: var(--padding-xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  position: relative;
  font-size: var(--font-size-label-large);
  line-height: var(--font-size-label-large-height);
  letter-spacing: 0.1px;
  font-weight: 500;
  font-family: var(--title-medium);
  color: var(--white);
  text-align: left;

  background-color: var(--primary);

  &:hover {
    ${shadowInsetCenterAnimation};
  }
  &:not(:hover) {
    ${shadowInsetCenterOutAnimation};
`;

const AboutCard = () => {
  const navigate = useNavigate();

  const onPrimaryContainerClick = useCallback(() => {
    navigate("/author");
  }, [navigate]);

  return (
    <ArticleContainer id="bio-section">
      <ArticleInnerContainer>
        <ImageContainer>
          <ImageInnerContainer>
            <Image
              alt="Baris Tayfun Photo"
              id="bio-img"
              src="/image-7@2x.png"
            />
          </ImageInnerContainer>
        </ImageContainer>
        <FrameParent>
          <TitleParent>
            <Title>Hakkında</Title>
            <Subtitle>
              <p>
                Barış Tayfün, insan deneyimi, ruhsallık ve fiziksel yaşam
                üzerine odaklanan hikayeler yazan bir yazardır. Kendisi,
                insanların derin duygusal bağlarını ve içsel yolculuklarını
                keşfetmeye olan tutkusuyla bilinir. Barış, eserlerinde ruhsal
                büyüme, insan ilişkileri ve yaşamın anlamı gibi evrensel
                temaları işlerken, okuyucularını derin düşünceye ve içsel keşfe
                teşvik etmek için kelimeleri ustalıkla kullanır. Yazarlık
                kariyerine başladığı günden bu yana, kitapları birçok okur
                tarafından ilgiyle takip edilmektedir ve eserleri ruhu ve bedeni
                birleştiren derin bir deneyim sunar.
              </p>
              <p>
                Barış Tayfün, hem düşünce hem de kalp dokusunu dokuyan,
                okuyuculara içsel bir yolculuk vaat eden, ilham verici
                eserleriyle tanınan bir yazardır. Onun kelimeleri, insanların
                hayatın derinliklerine inmelerine ve kendi iç dünyalarını
                keşfetmelerine rehberlik eder.
              </p>
            </Subtitle>
          </TitleParent>
          <Button id="button-read-more" onClick={onPrimaryContainerClick}>
            <div>
              <div>Devamını Oku</div>
            </div>
          </Button>
        </FrameParent>
      </ArticleInnerContainer>
    </ArticleContainer>
  );
};

export default AboutCard;
