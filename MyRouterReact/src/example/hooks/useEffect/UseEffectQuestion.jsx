import React, { useState } from 'react';

function UseEffectQuestion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What is the purpose of the useEffect hook in React?',
      answer: 'The useEffect hook allows you to perform side effects in functional components, such as data fetching, subscribing to external events, or directly manipulating the DOM after the component renders.'
    },
    {
      question: 'How do you make useEffect run only once when the component mounts?',
      answer: 'By passing an empty array ([]) as the second argument to useEffect, the effect will only run once after the initial render (similar to componentDidMount in class components).'
    },
    {
      question: 'What happens if you pass dependencies to useEffect?',
      answer: 'When you pass dependencies (like state or props) in the dependency array, useEffect will re-run the effect whenever any of the dependencies change.'
    },
    {
      question: 'Can you clean up side effects in useEffect? How?',
      answer: 'Yes, you can clean up side effects in useEffect by returning a cleanup function from the effect. This is useful for things like clearing timers or unsubscribing from events when the component unmounts or the effect dependencies change.'
    },
    {
      question: 'How does useEffect help with data fetching in React?',
      answer: 'useEffect can be used to fetch data from an API when the component mounts. It is ideal for handling asynchronous operations like fetching data, and it allows you to update the state once the data is received.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 className='py-2'>Question Bank</h1>
      {questions.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}>
          <div
            style={{
              background: 'black',
              padding: '10px 15px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
          </div>
          {activeIndex === index && (
            <div style={{ padding: '10px 15px', background: 'black', borderTop: '1px solid #ccc' }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default UseEffectQuestion;
