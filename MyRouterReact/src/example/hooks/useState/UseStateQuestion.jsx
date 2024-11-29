import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UseStateQuestion() {
  const questions = [
    {
      question: "What is state in React, and why is it important?",
      answer:
        "State is a built-in object in React that stores data for a component. It is important because it makes components dynamic and interactive, allowing them to respond to user actions and data changes."
    },
    {
      question: "What does the useState hook do in React?",
      answer:
        "The useState hook allows functional components to use state by creating a state variable and a function to update it."
    },
    {
      question: "How do you update the state in a functional component?",
      answer:
        "You update the state by calling the setState function returned by useState. You can pass the new value or a function to calculate the new value.\n\nExample:\n\nsetCount(count + 1);"
    },
    {
      question: "Why should you use a function to update state based on its previous value?",
      answer:
        "Using a function ensures that the state is updated consistently, especially when multiple state updates happen in quick succession.\n\nExample:\n\nsetCount((prevCount) => prevCount + 1);"
    },
    {
      question: "Can you use useState multiple times in a single component? Why or why not?",
      answer:
        "Yes, you can use useState multiple times in a single component to manage different state variables. Each call to useState creates an independent piece of state."
    }
  ];

  return (
    <div className="container mt-4">
    <h1 className="text-light">React State Q&A</h1>
    <hr className="text-light" />
    <div className="accordion" id="qnaAccordion">
      {questions.map((item, index) => (
        <div className="accordion-item bg-dark border-light" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {`Q${index + 1}: ${item.question}`}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#qnaAccordion"
          >
            <div className="accordion-body text-light">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default UseStateQuestion;
