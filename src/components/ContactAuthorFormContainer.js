import NameInputContainer from "./NameInputContainer";
import { useState, useRef } from "react";
import "./ContactAuthorFormContainer.css";

const ContactAuthorFormContainer = () => {
  const form = useRef();
  const [sendMessage, setSendMessage] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm
      // "service_sal6eco",
      // "template_aysgstf",
      // form.current,
      // "LJPfEKk97R3mBzIIc"
      ()
      .then(
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
    <section className="section21" id="contact-section">
      <div className="container11">
        <h1 className="title48" id="contact-heading">
          Contact Author XYZ
        </h1>
        <div className="description">
          Have a question or want to book Author XYZ for an event? Fill out the
          form below.
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className="input"
            type="text"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="input"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            className="button4"
            id="button-send-message"
            type="submit"
            onMouseLeave={resetSubmitText}
          >
            {sendMessage}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactAuthorFormContainer;
