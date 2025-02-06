import React from "react";

function QASectionUseRef() {
  const questions = [
    { q: "What does useRef do?", a: "It creates a reference to persist values across renders without causing re-renders." },
    { q: "Does useRef trigger re-renders?", a: "No, changing ref values does not cause a re-render." },
    { q: "How do you use useRef with DOM elements?", a: "Pass the ref to a JSX element and access it using ref.current." },
  ];

  return (
    <div className="container mt-4">
      <h3 className="text-dark">Q&A on useRef</h3>
      <ul className="list-group">
        {questions.map((item, index) => (
          <li key={index} className="list-group-item">
            <strong>{item.q}</strong> <br /> {item.a}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QASectionUseRef;
