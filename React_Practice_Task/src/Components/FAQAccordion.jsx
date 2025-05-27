import React, { useState } from 'react';
import '../assets/Css/FAQAccordion.css';

const FAQAccordion = () => {
  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What are components?',
      answer: 'Components are reusable building blocks in a React application.',
    },
    {
      question: 'What is state in React?',
      answer: 'State is an object that determines how that component renders and behaves.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          key={index}
        >
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="expand">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
