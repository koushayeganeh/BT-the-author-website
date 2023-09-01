import "./ContactAuthorSection.css";
const ContactAuthorSection = () => {
  return (
    <section className="section25">
      <img className="section-child14" alt="" src="/vector-200.svg" />
      <div className="container13">
        <h1 className="title52">Contact Author XYZ</h1>
        <div className="description1">
          Have a question or want to book Author XYZ for an event? Fill out the
          form below.
        </div>
        <div className="input2">
          <div className="title53">Name</div>
          <div className="textfield2">
            <div className="text1">Enter your name</div>
          </div>
        </div>
        <div className="input2">
          <div className="title53">Email</div>
          <div className="textfield2">
            <div className="text1">Enter your email</div>
          </div>
        </div>
        <div className="input2">
          <div className="title53">Message</div>
          <textarea className="textfield4" placeholder="Enter your message" />
        </div>
        <button className="button5">
          <div className="primary5">
            <div className="title56">Send Message</div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default ContactAuthorSection;
