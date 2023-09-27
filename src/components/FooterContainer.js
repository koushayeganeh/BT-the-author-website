import React from "react";
import styled from "styled-components";

const Section = styled.section`
  align-self: stretch;
  background-color: var(--primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0 var(--padding-71xl);
  z-index: 8;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--white);
  font-family: var(--title-medium);
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 6.25rem;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  font-family: var(--font-sans-serif);
  font-size: var(--font-size-read-small);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterContainer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <Section className="section23" id="footer">
      <Container className="container12">
        <Title className="title51">
          © {currentYear} Barış Tayfün. All rights reserved.
        </Title>
      </Container>
    </Section>
  );
};

export default FooterContainer;
