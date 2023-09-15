import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import "./QuoteCardForm.css";

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
    <section className="section20" id="quotes-section">
      <div className="container10">
        <h1 className="title44" id="quotes-heading">
          Alıntılar
        </h1>
        <div className="list7">
          <div className="card1">
            <div className="button-container">
              <button className="nav-button" onClick={prevQuote}>
                <MdArrowBackIos />
              </button>
            </div>
            <div className="card-content-row">
              <div className="user">
                <div className="avatar">
                  <div className="avatar-inner">
                    <div className="avatar-parent">
                      <img
                        className="avatar-icon"
                        alt={currentQuote.source}
                        id="quotes-book-img"
                        src={currentQuote.image}
                      />
                      <div className="title45">{currentQuote.source}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="title46">
                {currentQuote.quotes.map((quote, index) => (
                  <p className="atticus-he-was" key={index}>
                    "{quote}"
                  </p>
                ))}
              </div>
            </div>
            <div className="button-container">
              <button className="nav-button" onClick={nextQuote}>
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCardForm;
