import React, { useState, useRef } from "react";
import SocialLinksContainer from "../components/SocialLinksContainer";
import styled, { keyframes } from "styled-components";

const shadowInsetCenter = keyframes`
  0% {
    box-shadow: inset 0 0 0 0 transparent;
  }
  to {
    box-shadow: inset 0 0 14px 0 rgb(0 0 0/50%);
  }
`;

const shadowInsetCenterOut = keyframes`
  0% {
    box-shadow: inset 0 0 14px 0 rgb(0 0 0/50%);
  }
  to {
    box-shadow: inset 0 0 0 0 transparent;
  }
`;

const Section = styled.section`
  align-self: stretch;
  background-color: var(--grey);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-13xl) var(--padding-71xl);
  align-items: center;
  justify-content: center;
  position: relative;
  gap: var(--gap-41xl);
  z-index: 6;
  text-align: center;
  font-size: var(--lable-large-size);
  color: var(--secondary);
  font-family: var(--title-medium);

  @media (max-width: 960px) {
    padding: var(--padding-13xl) var(--padding-13xl);
  }

  @media (max-width: 768px) {
    padding: var(--padding-13xl) var(--padding-5xs);
  }
`;

const Container = styled.div`
  flex: 1;
  align-items: center;
  gap: var(--gap-5xl);
  z-index: 0;
  width: 100%;
  max-width: var(--max-inner-width);
`;

const Title = styled.h1`
  margin: 0;
  font-family: var(--font-sans-serif);
  font-size: var(--font-size-heading-large);
  line-height: var(--font-size-heading-large-height);
  font-weight: 700;
  align-self: stretch;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 0.5rem;

  @media (max-width: 960px) {
    font-size: var(--font-size-heading-medium);
    line-height: var(--font-size-heading-medium-height);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-heading-small);
    line-height: var(--font-size-heading-small-height);
  }
`;

const Description = styled.div`
  letter-spacing: 0.5px;
  font-family: var(--font-serif);
  font-size: var(--font-size-read-large);
  line-height: var(--font-size-read-large-height);
  align-self: stretch;
  position: relative;

  @media (max-width: 768px) {
    font-size: var(--font-size-read-medium);
    line-height: var(--font-size-read-medium-height);
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Button = styled.button`
  display: flex;
  cursor: pointer;
  border: 0;
  background-color: var(--primary);
  overflow: hidden;
  position: relative;
  font-size: var(--lable-large-size);
  letter-spacing: 0.1px;
  line-height: 1.25rem;
  font-weight: 500;
  font-family: var(--title-medium);
  color: var(--white);
  text-align: left;
  border-radius: var(--br-5xs);
  width: 19.5rem;
  height: 4.69rem;
  padding: var(--padding-xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

  &:hover {
    animation: 0.4s ease-in-out 0s 1 forwards ${shadowInsetCenter};
    opacity: 1;
  }

  &:not(:hover) {
    animation: 0.2s ease-in-out 0s 1 forwards ${shadowInsetCenterOut};
    opacity: 1;
  }
`;

const FormAndSocialContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 1rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-5xl);
  z-index: 0;
  width: 100%;
`;

const TextArea = styled.textarea`
  position: relative;
  flex: 1;
  letter-spacing: 0.5px;
  line-height: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 1.25rem;
  resize: vertical;
  align-self: stretch;
  display: flex;
  border-radius: var(--br-7xs);
  background-color: var(--white);
  border: 1px solid var(--color-gray-300);
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-xs);
  align-items: center;
  justify-content: flex-start;
  color: var(--color-gray-200);
  font-family: var(--body-large);

  &:focus {
    outline-color: var(--primary);
  }
`;

const Input = styled.input`
  align-self: stretch;
  display: flex;
  border-radius: var(--br-7xs);
  background-color: var(--white);
  border: 1px solid var(--color-gray-300);
  flex-direction: row;
  padding: var(--padding-5xs) var(--padding-xs);
  align-items: center;
  justify-content: flex-start;
  color: var(--color-gray-200);
  font-family: var(--body-large);

  &:focus {
    outline-color: var(--primary);
  }
`;

const ContactAuthorFormContainer = () => {
  const form = useRef();
  const [sendMessage, setSendMessage] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
    setSendMessage("Message Sent!");
  };

  function resetSubmitText() {
    setSendMessage("Send Message");
  }

  return (
    <Section className="section21" id="contact-section">
      <Container className="container11">
        <Title className="title48" id="contact-heading">
          Yazar ile İletişime Geç
        </Title>
        <Description className="description">
          Bir sorunuz mu var? Aşağıdaki formu doldurun.
        </Description>
        <FormAndSocialContainer className="form-and-social-container">
          <ContactForm ref={form} onSubmit={sendEmail} className="contact-form">
            <Input
              className="input"
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <Input
              className="input"
              type="text"
              name="email"
              placeholder="Your Email"
              required
            />
            <TextArea
              className="input"
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></TextArea>
            <Button
              className="button4"
              id="button-send-message"
              type="submit"
              onMouseLeave={resetSubmitText}
            >
              {sendMessage}
            </Button>
          </ContactForm>
          <SocialLinksContainer className="social-links-container" />
        </FormAndSocialContainer>
      </Container>
    </Section>
  );
};

export default ContactAuthorFormContainer;
