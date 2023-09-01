import NameInputContainer from "./NameInputContainer";
import "./ContactAuthorFormContainer.css";
const ContactAuthorFormContainer = () => {
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
        <NameInputContainer title="Name" text="Enter your name" />
        <NameInputContainer title="Email" text="Enter your email" />
        <div className="input1">
          <div className="title49">Message</div>
          <textarea
            className="textfield1"
            placeholder="Enter your message"
            id="message-textarea"
          />
        </div>
        <button className="button4" id="button-send-message">
          <div className="primary4">
            <div className="title50">Send Message</div>
          </div>
        </button>
      </div>
      <img className="section-child11" alt="" src="/vector-200.svg" />
    </section>
  );
};

export default ContactAuthorFormContainer;
