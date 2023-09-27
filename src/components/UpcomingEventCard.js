import React from "react";
import styled from "styled-components";
import { SlCalender } from "react-icons/sl";

const StyledUpcomingEventCard = styled.section`
  align-self: stretch;
  background-color: var(--primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-13xl) var(--padding-71xl);
  align-items: center;
  justify-content: center;
  position: relative;
  gap: var(--gap-41xl);
  z-index: 3;
  text-align: left;
  font-size: var(--heading-large-size);
  color: var(--white);

  @media (max-width: 960px) {
    padding: var(--padding-13xl) var(--padding-13xl);
  }

  @media (max-width: 768px) {
    padding: var(--padding-13xl) var(--padding-5xs);
  }
`;

const InnerContent = styled.div`
  align-self: stretch;
  background-color: var(--primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: var(--gap-xl);
  z-index: 3;
  text-align: left;
  font-size: var(--font-size-heading-large);
  color: var(--white);
  width: 100%;
  max-width: var(--max-inner-width);

  @media (max-width: 960px) {
    flex-direction: column;
    padding: var(--padding-13xl) var(--padding-5xs);
    font-size: var(--font-size-heading-small);
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;

const Title = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-heading-large);
  line-height: var(--font-size-heading-large-height);
  font-family: var(--font-sans-serif);
  letter-spacing: 0.15rem;
  font-weight: 700;

  @media (max-width: 960px) {
    font-size: var(--font-size-heading-medium);
    line-height: var(--font-size-heading-medium-height);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-heading-small);
    line-height: var(--font-size-heading-small-height);
  }
`;

const List = styled.div`
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--white);
  flex-direction: row;
  padding: var(--padding-xl) 0;
  align-items: flex-start;
  z-index: 1;
  text-align: center;
  font-size: var(--title-large-size);
  color: var(--color-black);
  background-image: url("book-party.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding-xs) 0;
  align-items: center;
  gap: var(--gap-xl);
`;

const Frame = styled.div`
  border-radius: var(--br-31xl);
  background-color: var(--color-gray-200);
  width: 6.25rem;
  flex-direction: column;
  font-size: var(--font-size-43xl-5);
`;

const Icon = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 6.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 6.25rem;
  flex-shrink: 0;
  color: white;
`;

const TitleParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;

const Title40 = styled.div`
  align-self: stretch;
  position: relative;
  font-family: var(--font-sans-serif);
  font-size: var(--font-size-title-large);
  font-weight: bold;
  color: white;

  @media (max-width: 768px) {
    font-size: var(--font-size-title-small);
    font-weight: bold;
  }
`;

const Subtitle19 = styled.div`
  align-self: stretch;
  font-size: var(--font-size-read-large);
  line-height: var(--font-size-read-large-height);
  letter-spacing: 0.15px;
  font-weight: 500;
  color: var(--color-gray-200);
  color: white;

  @media (max-width: 768px) {
    font-size: var(--font-size-read-small);
    line-height: var(--font-size-read-small-height);
  }
`;

const Subtitle20 = styled.div`
  align-self: stretch;
  position: relative;
  font-family: var(--font-serif);
  font-size: var(--font-size-title-large);
  color: var(--polar);

  @media (max-width: 768px) {
    font-size: var(--font-size-title-small);
    line-height: var(--font-size-title-small-height);
  }
`;

const UpcomingEventCard = () => {
  return (
    <StyledUpcomingEventCard id="event-section">
      <InnerContent>
        <Container>
          <Title id="event-heading">Yaklaşan Etkinlik</Title>
        </Container>
        <List>
          <Item>
            <Frame>
              <Icon>
                <SlCalender />
              </Icon>
            </Frame>
            <TitleParent>
              <Title40>Kitap Lansman Partisi</Title40>
              <Subtitle19>Yer: XYZ Şehri</Subtitle19>
            </TitleParent>
            <Subtitle20>Tarih: 1 Ocak 2024</Subtitle20>
          </Item>
        </List>
      </InnerContent>
    </StyledUpcomingEventCard>
  );
};

export default UpcomingEventCard;
