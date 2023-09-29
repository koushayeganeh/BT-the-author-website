import styled from "styled-components";

const TextBoxList = styled.section`
  align-self: stretch;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  text-align: left;
  padding: 1rem;

  @media (max-width: 960px) {
    padding: var(--padding-base) var(--padding-13xl);
  }

  @media (max-width: 768px) {
    padding: 0 var(--padding-5xs);
    padding-bottom: var(--padding-13xl);
  }
`;

const TextBoxArticle = styled.section`
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
  top: 0;

  @media (max-width: 768px) {
    border-radius: var(--br-5xs);
    background-color: var(--white);
    flex-direction: column;
    padding: var(--padding-5xs);
    align-items: flex-start;
    align-self: center;
    gap: var(--gap-xl);
    mix-blend-mode: normal;
    width: 100%;
    top: 0;
  }
`;

const TextBoxFrameParent = styled.div``;

const TextBoxTitleParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TextBoxTitle = styled.div`
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

const TextBoxSubtitle = styled.div`
  align-self: stretch;
  position: relative;
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

const AboutCard = ({ title, text }) => {
  return (
    <TextBoxList>
      <TextBoxArticle>
        <TextBoxFrameParent>
          <TextBoxTitleParent>
            <TextBoxTitle>{title}</TextBoxTitle>
            <TextBoxSubtitle>
              {text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </TextBoxSubtitle>
          </TextBoxTitleParent>
        </TextBoxFrameParent>
      </TextBoxArticle>
    </TextBoxList>
  );
};

export default AboutCard;
