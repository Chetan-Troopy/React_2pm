import React, { useState } from "react";

const QuestionsAnswers = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const qaData = [
    // useContext Questions
    { 
      question: "1. What is the useContext hook in React?", 
      answer: "The useContext hook allows components to access and consume data from a Context object without passing props through every level of the component tree." 
    },
    { 
      question: "2. Why is useContext used instead of prop drilling?", 
      answer: "useContext eliminates the need to pass props manually through multiple layers of components, making the code cleaner and easier to maintain." 
    },
    { 
      question: "3. How do you create a context in React?", 
      answer: "You use React.createContext() to create a Context object, which can then be used with a Provider to share data and the useContext hook to consume it." 
    },
    { 
      question: "4. What are the arguments passed to useContext?", 
      answer: "useContext takes a single argument: the Context object created by React.createContext()." 
    },
    { 
      question: "5. Can useContext be used without a Provider?", 
      answer: "Yes, but if no Provider is used, the useContext hook will return the default value provided when creating the Context object." 
    },
    { 
      question: "6. What happens if the Provider value changes?", 
      answer: "All components consuming the context will automatically re-render with the updated value." 
    },
    { 
      question: "7. Is useContext synchronous or asynchronous?", 
      answer: "useContext is synchronous; updates to context values are reflected immediately in the consuming components." 
    },
    { 
      question: "8. Can useContext be used with multiple Contexts?", 
      answer: "Yes, you can use multiple Contexts in the same component by calling useContext separately for each Context." 
    },
    { 
      question: "9. How is useContext different from Redux?", 
      answer: "useContext is built into React and works well for smaller, simpler state sharing, whereas Redux is a full state management library suitable for large-scale applications." 
    },
    { 
      question: "10. What are common use cases for useContext?", 
      answer: "Common use cases include themes, user authentication, language selection, and global app settings." 
    },

    // useMemo Questions
    { 
      question: "11. What is the useMemo hook in React?", 
      answer: "useMemo is a hook that memoizes the result of a computation, preventing unnecessary re-computation during re-renders." 
    },
    { 
      question: "12. When should you use useMemo?", 
      answer: "useMemo should be used when you have a computationally expensive function that doesn't need to be re-evaluated on every render." 
    },
    { 
      question: "13. How does useMemo work?", 
      answer: "useMemo takes a function and a dependency array. It recomputes the function's result only if one of the dependencies has changed." 
    },
    { 
      question: "14. Can useMemo optimize all types of performance issues?", 
      answer: "No, useMemo is only effective for optimizing expensive computations. It doesn't help with optimizing large component trees." 
    },
    { 
      question: "15. What is the syntax of useMemo?", 
      answer: "const memoizedValue = useMemo(() => computeValue(), [dependencies]);" 
    },
    { 
      question: "16. What happens if the dependency array is empty?", 
      answer: "If the dependency array is empty, the computation will run only once during the component's initial render." 
    },
    { 
      question: "17. Can useMemo cause issues if dependencies are not managed properly?", 
      answer: "Yes, incorrect dependencies can lead to stale values or unnecessary recomputations, which may cause bugs." 
    },
    { 
      question: "18. How is useMemo different from useCallback?", 
      answer: "useMemo memoizes the result of a computation, while useCallback memoizes a function itself." 
    },
    { 
      question: "19. Is useMemo a guarantee for performance improvement?", 
      answer: "No, useMemo adds overhead, so it should be used only when the performance benefit outweighs the cost." 
    },
    { 
      question: "20. What are common use cases for useMemo?", 
      answer: "Common use cases include expensive calculations, derived state, and optimizing child component rendering." 
    },

    // useCallback Questions
    { 
      question: "21. What is the useCallback hook in React?", 
      answer: "useCallback memoizes a function, ensuring that the function reference remains the same between renders unless its dependencies change." 
    },
    { 
      question: "22. When should you use useCallback?", 
      answer: "useCallback is useful when passing callbacks to child components to prevent unnecessary re-renders." 
    },
    { 
      question: "23. What is the syntax of useCallback?", 
      answer: "const memoizedCallback = useCallback(() => { // Function logic }, [dependencies]);" 
    },
    { 
      question: "24. How is useCallback related to React.memo?", 
      answer: "useCallback is often used with React.memo to prevent child components from re-rendering unnecessarily when receiving callback props." 
    },
    { 
      question: "25. Does useCallback improve performance in all cases?", 
      answer: "No, useCallback adds overhead and should only be used when there's a clear performance benefit." 
    },
    { 
      question: "26. Can useCallback and useMemo be used together?", 
      answer: "Yes, they can be used together to optimize both function references and expensive computations." 
    },
    { 
      question: "27. What happens if the dependency array is empty in useCallback?", 
      answer: "If the dependency array is empty, the function will be memoized and never change unless the component is re-mounted." 
    },
    { 
      question: "28. Can useCallback cause stale closures?", 
      answer: "Yes, if the dependencies are not managed correctly, it can lead to stale closures where the function uses outdated values." 
    },
    { 
      question: "29. What is the difference between useCallback and useRef for memoizing functions?", 
      answer: "useCallback recreates the function only when dependencies change, while useRef can hold a stable reference but won't automatically update based on dependencies." 
    },
    { 
      question: "30. What are common use cases for useCallback?", 
      answer: "Common use cases include event handlers, API calls, and callbacks passed to optimized child components." 
    }
  ];

  const toggleAnswer = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Q&A on useContext, useMemo, and useCallback</h1>
      {qaData.map((qa, index) => (
        <div key={index} className="mb-4">
          <button 
            onClick={() => toggleAnswer(index)} 
            className="text-left w-full bg-gray-100 p-3 rounded shadow hover:bg-gray-200 transition"
          >
            {qa.question}
          </button>
          {selectedQuestion === index && (
            <p className="bg-gray-50 p-3 rounded border mt-2">{qa.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionsAnswers;
