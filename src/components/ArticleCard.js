import { useMemo } from "react";
import styled, { keyframes, css } from "styled-components";

// Keyframes
const changeBackgroundColor = keyframes`
  0% {
    background-color: var(--white);
    color: var(--color-black);
  }
  to {
    background-color: var(--primary);
    color: var(--white);
  }
`;

const changeBackgroundColorOut = keyframes`
  0% {
    background-color: var(--primary);
    color: var(--white);
  }
  to {
    background-color: var(--white);
    color: var(--color-black);
  }
`;

const shadowInsetCenterAnimation = css`
  animation: 0.4s ease-in-out 0s 1 forwards ${changeBackgroundColor};
  opacity: 1;
`;

const shadowInsetCenterOutAnimation = css`
  animation: 0.2s ease-in-out 0s 1 forwards ${changeBackgroundColorOut};
  opacity: 1;
`;

const Row = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  gap: var(--gap-base);
  flex-direction: row;
  flex-wrap: wrap;
  padding: var(--padding-base) 0;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--title-medium);
`;

const Article = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  gap: var(--gap-base);
  flex: 1;
  border-radius: var(--br-7xs);
  border: 1px solid var(--color-gray-300);
  flex-direction: column;
  padding: var(--padding-base);
  cursor: pointer;
  background-color: var(--white);

  &:hover {
    ${shadowInsetCenterAnimation};
  }
  &:not(:hover) {
    ${shadowInsetCenterOutAnimation};
  }
`;

const ImageContainer = styled.div`
  align-self: stretch;
  display: flex;
  height: 18rem;
  overflow: hidden;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  align-self: stretch;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  background-repeat: repeat;
  background-position: center;
  background-size: cover;
`;

const TitleParent = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-5xs);
`;

const Title = styled.h2`
  align-self: stretch;
  position: relative;
  margin: 0;
  line-height: 1.75rem;
  font-weight: 500;
  font-family: var(--font-sans-serif);
  font-size: var(--font-size-title-large);

  @media (max-width: 960px) {
    font-size: var(--font-size-title-medium);
    line-height: var(--font-size-title-medium-height);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-title-small);
    line-height: var(--font-size-title-small-height);
  }
`;

const Subtitle = styled.div`
  align-self: stretch;
  position: relative;
  font-family: var(--font-sans-serif);
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  color: var(--color-gray-200);
`;

const LabelsContainer = styled.div`
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: var(--padding-9xs) 0;
  gap: var(--gap-7xs);
  font-size: var(--font-size-xs);
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const LabelDiv = styled.div`
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  border-radius: var(--br-11xs);
  background-color: var(--color-gainsboro-200);
  border: 0.5px solid var(--color-gray-300);
  display: flex;
  padding: var(--padding-11xs) var(--padding-9xs);
  justify-content: center;
`;

const LabelText = styled.div`
  position: relative;
  line-height: 1rem;
  font-family: var(--font-serif);
`;

const ArticleCard = ({
  title,
  date,
  labelText,
  labelText1,
  labelText2,
  labelText3,
  propBackgroundImage,
  onArticleContainer3Click,
}) => {
  const imageContainerStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);
  return (
    <Row>
      <Article onClick={onArticleContainer3Click}>
        <ImageContainer>
          <Image style={imageContainerStyle} />
        </ImageContainer>
        <TitleParent>
          <Title>{title}</Title>
          <Subtitle>{date}</Subtitle>
          <LabelsContainer>
            <LabelDiv>
              <LabelText>{labelText}</LabelText>
            </LabelDiv>
            <LabelDiv>
              <LabelText>{labelText1}</LabelText>
            </LabelDiv>
            <LabelDiv>
              <LabelText>{labelText2}</LabelText>
            </LabelDiv>
            <LabelDiv>
              <LabelText>{labelText3}</LabelText>
            </LabelDiv>
          </LabelsContainer>
        </TitleParent>
      </Article>
    </Row>
  );
};

export default ArticleCard;
