import React from "react";
import { useState } from "react";
import "./faq.css";
import image1 from "../../../assets/Bubblechat.png";
import image2 from "../../../assets/question.png";

function Faq() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "How can I create an account on your website?",
      answer:
        "To create an account, click on the 'Sign Up' button and provide the required information.",
      isOpen: false,
    },
    {
      id: 2,
      question: "Are the courses accessible on mobile devices?",
      answer:
        "Yes, our courses are fully responsive and accessible on all mobile devices.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Can I get a refund if I'm not satisfied with the course?",
      answer:
        "We offer a 30-day money-back guarantee if you're not satisfied with the course content.",
      isOpen: false,
    },
    {
      id: 4,
      question: "Are the course materials available for download?",
      answer:
        "Yes, you can download course materials and access them even after course completion.",
      isOpen: false,
    },
  ]);

  const handleToggle = (id) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) => {
        if (question.id === id) {
          return { ...question, isOpen: !question.isOpen };
        }
        return question;
      })
    );
  };

  return (
    <React.Fragment>
      <div className="faqMaindiv">
        <div className="img_part">
          <img src={image1} className="faq_logo" alt="img" />
        </div>

        <div className="faqheading">
          <div className="Written_content">
            <h1>
              Frequently Asked <span>Questions</span>
            </h1>
            <p>
              Here are some frequently asked questions about our hotels from our
              loving customers. Should you have any other questions, feel free
              to reach out via the contact form below.
            </p>
            <img
              src={image2}
              style={{ width: "368px", position: "absolute", right: "219px" }}
              alt="img"
            />
          </div>

          <div className="faqToogle">
            {questions.map((question) => (
              <div
                key={question.id}
                className={`faqQNA ${question.isOpen ? "open" : ""}`}
                onClick={() => handleToggle(question.id)}
              >
                <h3>{question.question}</h3>
                <p>{question.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Faq;
