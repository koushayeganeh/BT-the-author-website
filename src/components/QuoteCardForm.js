import "./QuoteCardForm.css";
const QuoteCardForm = () => {
  return (
    <section className="section20" id="quotes-section">
      <div className="container10">
        <h1 className="title44" id="quotes-heading">
          Quotes
        </h1>
        <div className="list7">
          <div className="card1">
            <div className="user">
              <div className="avatar">
                <div className="avatar-inner">
                  <div className="avatar-parent">
                    <img
                      className="avatar-icon"
                      alt=""
                      id="quotes-book-img"
                      src="/avatar@2x.png"
                    />
                    <div className="title45">From Book 1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="title46">
              <p className="atticus-he-was">"Atticus, he was real nice."</p>
              <p className="atticus-he-was">
                "Most people are, Scout, when you finally see them."
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="section-child10" alt="" src="/vector-200.svg" />
    </section>
  );
};

export default QuoteCardForm;
