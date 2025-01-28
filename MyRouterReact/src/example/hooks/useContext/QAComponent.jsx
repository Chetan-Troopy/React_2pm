import React from "react";

const QAComponent = () => {
  const questionsAndAnswers = [
    // useContext Questions
    {
      category: "useContext",
      question: "What is useContext?",
      answer: "The useContext hook allows components to access context values directly, avoiding prop drilling."
    },
    {
      category: "useContext",
      question: "How do you create a context in React?",
      answer: "You create a context using React.createContext(), which provides a Provider and a Consumer."
    },
    {
      category: "useContext",
      question: "What is the purpose of the Provider in useContext?",
      answer: "The Provider component wraps the part of the component tree where you want to provide the context value."
    },
    {
      category: "useContext",
      question: "How do you consume a context value using useContext?",
      answer: "You call useContext with the context object, like const value = useContext(MyContext)."
    },
    {
      category: "useContext",
      question: "What problem does useContext solve?",
      answer: "It eliminates the need for prop drilling by providing a direct way to access shared values."
    },
    {
      category: "useContext",
      question: "Can useContext trigger a re-render?",
      answer: "Yes, components consuming the context will re-render when the context value changes."
    },
    {
      category: "useContext",
      question: "Can we use multiple contexts in a single component?",
      answer: "Yes, you can use multiple useContext hooks to consume values from different contexts."
    },
    {
      category: "useContext",
      question: "What happens if a context value is updated?",
      answer: "All components consuming the context will automatically re-render with the new value."
    },
    {
      category: "useContext",
      question: "Is useContext reactive to deep object changes?",
      answer: "No, it only triggers re-renders when the reference of the context value changes."
    },
    {
      category: "useContext",
      question: "How do you share a function using useContext?",
      answer: "You can include the function in the context value and call it in child components."
    },

    // useMemo Questions
    {
      category: "useMemo",
      question: "What is useMemo?",
      answer: "The useMemo hook memoizes the result of a calculation to prevent unnecessary recomputation."
    },
    {
      category: "useMemo",
      question: "How do you use useMemo in React?",
      answer: "Wrap the calculation inside useMemo and provide dependencies: useMemo(() => expensiveCalc(), [deps])."
    },
    {
      category: "useMemo",
      question: "When should you use useMemo?",
      answer: "Use it for expensive calculations that don't need to re-run unless dependencies change."
    },
    {
      category: "useMemo",
      question: "Does useMemo cache data or the function itself?",
      answer: "useMemo caches the result of the function, not the function itself."
    },
    {
      category: "useMemo",
      question: "What are dependencies in useMemo?",
      answer: "Dependencies are variables or values that, when changed, cause the memoized value to recompute."
    },
    {
      category: "useMemo",
      question: "What happens if you pass an empty dependency array to useMemo?",
      answer: "The calculation is only performed once, similar to a component mounting."
    },
    {
      category: "useMemo",
      question: "Can useMemo optimize rendering performance?",
      answer: "Yes, it avoids recomputation of expensive values when dependencies haven't changed."
    },
    {
      category: "useMemo",
      question: "What happens if dependencies are omitted in useMemo?",
      answer: "The memoized value will not update when relevant variables change."
    },
    {
      category: "useMemo",
      question: "Can useMemo prevent unnecessary renders?",
      answer: "No, it only prevents unnecessary calculations, not renders."
    },
    {
      category: "useMemo",
      question: "How does useMemo differ from useCallback?",
      answer: "useMemo memoizes a value, while useCallback memoizes a function."
    },

    // useCallback Questions
    {
      category: "useCallback",
      question: "What is useCallback?",
      answer: "The useCallback hook memoizes a function to prevent its recreation on every render."
    },
    {
      category: "useCallback",
      question: "Why use useCallback in React?",
      answer: "To optimize performance by preventing child components from re-rendering unnecessarily."
    },
    {
      category: "useCallback",
      question: "How do you use useCallback?",
      answer: "Wrap a function in useCallback and provide dependencies: useCallback(() => {}, [deps])."
    },
    {
      category: "useCallback",
      question: "What happens if dependencies change in useCallback?",
      answer: "The memoized function is recreated when any dependency changes."
    },
    {
      category: "useCallback",
      question: "Can useCallback improve performance in lists?",
      answer: "Yes, it prevents unnecessary re-renders of child components using React.memo."
    },
    {
      category: "useCallback",
      question: "When should you avoid useCallback?",
      answer: "Avoid it if the function recreation is inexpensive or the dependencies are frequently changing."
    },
    {
      category: "useCallback",
      question: "Does useCallback memoize the return value of a function?",
      answer: "No, it only memoizes the function reference."
    },
    {
      category: "useCallback",
      question: "What’s the difference between useMemo and useCallback?",
      answer: "useMemo memoizes a value, while useCallback memoizes a function."
    },
    {
      category: "useCallback",
      question: "Can useCallback be used without dependencies?",
      answer: "Yes, but it will always recreate the function unless dependencies are specified."
    },
    {
      category: "useCallback",
      question: "Does useCallback work with event handlers?",
      answer: "Yes, useCallback is commonly used to memoize event handler functions."
    }
  ];

  return (
    <div className="p-3 text-bg-warning ">
      <h1 className="text-2xl font-bold mb-4">React Interview Q&A</h1>
      {["useContext", "useMemo", "useCallback"].map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-xl font-semibold text-bg-dark p-2 mb-3">
            {category} Questions
          </h2>
          <ul className="space-y-4">
            {questionsAndAnswers
              .filter((qa) => qa.category === category)
              .map((qa, index) => (
                <li key={index} className="p-4 bg-warning shadow rounded-md">
                  <p className="font-medium text-gray-700">{qa.question}</p>
                  <p className="text-gray-600 mt-1">- {qa.answer}</p>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QAComponent;
