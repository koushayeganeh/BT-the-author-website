import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const changeColor = keyframes`
  0% {
    color: var(--white);
  }

  to {
    color: var(--secondary);
  }
`;

const quotesData = [
  {
    source: "Hamlet",
    image: "/avatar@2x.png",
    quotes: [
      "To be or not to be, that is the question.",
      "The lady doth protest too much, methinks.",
    ],
  },
  {
    source: "Romeo and Juliet",
    image: "/avatar@2x.png",
    quotes: [
      "But, soft! What light through yonder window breaks?",
      "These violent delights have violent ends.",
    ],
  },
  {
    source: "Macbeth",
    image: "/avatar@2x.png",
    quotes: [
      "Is this a dagger which I see before me?",
      "Out, out, brief candle!",
    ],
  },
  {
    source: "Othello",
    image: "/avatar@2x.png",
    quotes: [
      "O, beware, my lord, of jealousy!",
      "I kissed thee ere I killed thee.",
    ],
  },
  {
    source: "Julius Caesar",
    image: "/avatar@2x.png",
    quotes: [
      "Et tu, Brute?",
      "Friends, Romans, countrymen, lend me your ears!",
    ],
  },
  {
    source: "A Midsummer Night's Dream",
    image: "/avatar@2x.png",
    quotes: [
      "The course of true love never did run smooth.",
      "Lord, what fools these mortals be!",
    ],
  },
  {
    source: "The Tempest",
    image: "/avatar@2x.png",
    quotes: [
      "What's past is prologue.",
      "Hell is empty and all the devils are here.",
    ],
  },
];

const StyledSection = styled.section`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-13xl) var(--padding-71xl);
  align-items: center;
  justify-content: center;
  position: relative;
  gap: var(--gap-41xl);
  z-index: 5;
  text-align: center;
  font-size: var(--heading-large-size);
  color: var(--secondary);
  font-family: var(--title-medium);

  @media (max-width: 960px) {
    padding: var(--padding-13xl) var(--padding-13xl);
  }

  @media (max-width: 768px) {
    padding: var(--padding-xl) var(--padding-5xs);
  }
`;

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  z-index: 0;
  width: 100%;
  max-width: var(--max-inner-width);
`;

const Title = styled.h1`
  margin: 0;
  position: relative;
  font-family: var(--font-sans-serif);
  font-size: var(--font-size-heading-large);
  line-height: var(--font-size-heading-large-height);
  font-weight: 700;
  letter-spacing: 0.15rem;
  display: inline-block;
  width: 100%;
  align-self: center;
  justify-self: center;
  padding-top: 2rem;
  padding-bottom: 1rem;

  @media (max-width: 960px) {
    font-size: var(--font-size-heading-medium);
    line-height: var(--font-size-heading-medium-height);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-heading-small);
    line-height: var(--font-size-heading-small-height);
  }
`;

const AvatarIcon = styled.img`
  border-radius: var(--br-13xl);
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  object-fit: cover;
`;

const Title45 = styled.div`
  flex: 1;
  line-height: 1.75rem;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 1.25rem;
`;

const AvatarParent = styled.div`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  gap: var(--gap-5xs);
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const UserContainer = styled.div`
  align-self: stretch;
  display: none;
`;

const AtticusHeWas = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-size: var(--font-size-read-large);
  line-height: var(--font-size-read-large-height);
  font-family: var(--font-serif);
`;

const Title46 = styled.div`
  align-self: stretch;
  position: relative;
  letter-spacing: 0.5px;
  color: var(--white);
  text-align: center;
  display: -webkit-inline-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const NavButton = styled.button`
  background-color: transparent;
  color: var(--white);
  border: none;
  font-size: 2rem;

  &:hover {
    animation: 0.4s ease-in-out 0s 1 forwards ${changeColor};
  }
`;

const CardContainer = styled.div`
  flex: 1;
  border-radius: var(--br-7xs);
  background-color: var(--primary);
  overflow: hidden;
  flex-direction: column;
  padding: 5rem;
  justify-content: center;
  gap: var(--gap-base);
  display: flex;
  flex-direction: row;

  @media (max-width: 960px) {
    padding: 5rem 1rem;
  }
`;

const CardContentRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const List = styled.div`
  align-self: stretch;
  flex-direction: row;
  padding: var(--padding-xl) 0;
  justify-content: center;
  text-align: left;
  font-size: var(--title-large-size);
  color: var(--grey);
`;

const SectionChild = styled.div`
  position: absolute;
  margin: 0 !important;
  width: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  height: 0.03rem;
  z-index: 1;
`;

const QuoteCardForm = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotesData.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex(
      (prevIndex) => (prevIndex - 1 + quotesData.length) % quotesData.length
    );
  };

  const currentQuote = quotesData[currentQuoteIndex];

  return (
    <StyledSection id="quotes-section">
      <Container>
        <Title id="quotes-heading">Alıntılar</Title>
        <ListContainer>
          <CardContainer>
            <div className="button-container">
              <NavButton onClick={prevQuote}>
                <MdArrowBackIos />
              </NavButton>
            </div>
            <CardContentRow>
              <UserContainer>
                <AvatarContainer>
                  <AvatarIcon
                    alt={currentQuote.source}
                    id="quotes-book-img"
                    src={currentQuote.image}
                  />
                  <Title45>{currentQuote.source}</Title45>
                </AvatarContainer>
              </UserContainer>
              <Title46>
                {currentQuote.quotes.map((quote, index) => (
                  <AtticusHeWas key={index}>"{quote}"</AtticusHeWas>
                ))}
              </Title46>
            </CardContentRow>
            <div className="button-container">
              <NavButton onClick={nextQuote}>
                <MdArrowForwardIos />
              </NavButton>
            </div>
          </CardContainer>
        </ListContainer>
      </Container>
      <SectionChild />
    </StyledSection>
  );
};

export default QuoteCardForm;
