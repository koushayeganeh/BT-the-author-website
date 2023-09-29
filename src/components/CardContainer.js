import React, { useMemo } from "react";
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

// Styled components
const CardContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  text-align: left;
  font-size: var(--title-large-size);
  color: var(--color-black);
  font-family: var(--title-medium);
`;

const CardContainerArticle = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  border-radius: var(--br-7xs);
  border: 1px solid var(--color-gray-300);
  padding: var(--padding-base);
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-base);
  background-color: var(--white);

  &:hover {
    ${shadowInsetCenterAnimation};
  }
  &:not(:hover) {
    ${shadowInsetCenterOutAnimation};
  }
`;

const CardContainerImageContainer = styled.div`
  width: 8.19rem;
  height: 11.75rem;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const CardContainerImage = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  background-color: var(--color-gainsboro-100);
`;

const CardContainerTitleParent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-5xs);
`;

const CardContainerTitle41 = styled.div`
  align-self: stretch;
  position: relative;
  font-family: var(--font-sans-serif);
  font-size: var(--font-size-title-large);
  line-height: var(--font-size-title-large-height);

  @media (max-width: 960px) {
    font-size: var(--font-size-title-medium);
    line-height: var(--font-size-title-medium-height);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-title-small);
    line-height: var(--font-size-title-small-height);
  }
`;

const CardContainerSubtitle21 = styled.div`
  align-self: stretch;
  position: relative;
  font-family: var(--font-sans-serif);
  font-size: var(--font-size-read-medium);
  line-height: var(--font-size-title-large-height);
  letter-spacing: 0.15px;
  font-weight: 500;
  color: var(--color-gray-200);
`;

const CardContainerSubtitle22 = styled.div`
  align-self: stretch;
  position: relative;
  font-family: var(--font-serif);
  font-size: var(--font-size-read-large);
  line-height: var(--font-size-read-large-height);
  letter-spacing: 0.5px;

  @media (max-width: 960px) {
    font-family: var(--font-serif);
    font-size: var(--font-size-read-medium);
    line-height: var(--font-size-read-medium-height);
    letter-spacing: 0.2px;
  }
  @media (max-width: 768px) {
    font-family: var(--font-serif);
    font-size: var(--font-size-read-small);
    line-height: var(--font-size-read-small-height);
    letter-spacing: 0.1px;
  }
`;

const CardContainerLabelText28 = styled.div`
  font-family: var(--font-serif);
  font-size: var(--font-size-read-small);
  line-height: var(--font-size-read-small-height);
  position: relative;
  line-height: 1rem;
`;

const CardContainerLabelNormal28 = styled.div`
  border-radius: var(--br-11xs);
  background-color: var(--color-gainsboro-200);
  border: 0.5px solid var(--color-gray-300);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-11xs) var(--padding-9xs);
  align-items: center;
  justify-content: center;
`;

const CardContainerSelection7 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-self: stretch;
  overflow: hidden;
  flex-direction: row;
  padding: var(--padding-9xs) 0;
  align-items: center;
  gap: var(--gap-7xs);
  font-size: var(--font-size-xs);
`;

const CardContainer = ({
  title,
  subtitle,
  subtitle1,
  labelText,
  labelText1,
  labelText2,
  labelText3,
  propBackgroundImage,
  onRowContainerClick,
}) => {
  const imageContainerStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <CardContainerWrapper onClick={onRowContainerClick}>
      <CardContainerArticle>
        <CardContainerImageContainer style={imageContainerStyle}>
          <CardContainerImage />
        </CardContainerImageContainer>
        <CardContainerTitleParent>
          <CardContainerTitle41>{title}</CardContainerTitle41>
          <CardContainerSubtitle21>{subtitle}</CardContainerSubtitle21>
          <CardContainerSubtitle22>{subtitle1}</CardContainerSubtitle22>
          <CardContainerSelection7>
            <CardContainerLabelNormal28>
              <CardContainerLabelText28>{labelText}</CardContainerLabelText28>
            </CardContainerLabelNormal28>
            <CardContainerLabelNormal28>
              <CardContainerLabelText28>{labelText1}</CardContainerLabelText28>
            </CardContainerLabelNormal28>
            <CardContainerLabelNormal28>
              <CardContainerLabelText28>{labelText2}</CardContainerLabelText28>
            </CardContainerLabelNormal28>
            <CardContainerLabelNormal28>
              <CardContainerLabelText28>{labelText3}</CardContainerLabelText28>
            </CardContainerLabelNormal28>
          </CardContainerSelection7>
        </CardContainerTitleParent>
      </CardContainerArticle>
    </CardContainerWrapper>
  );
};

export default CardContainer;
