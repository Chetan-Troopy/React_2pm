import React from "react";

const UseReducerQuestions = () => {
  return (
    <div className="container text-light bg-dark p-4">
      <div className="accordion" id="faqAccordion">
        {/* Question 1 */}
        <div className="accordion-item bg-dark border-light">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button text-light bg-dark border-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Q1: What is the purpose of useReducer in React?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-light">
              A1: useReducer is used to manage complex state logic in functional components, making it easier to handle multiple state transitions and actions, especially when the state is dependent on several variables.
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="accordion-item bg-dark border-light">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button text-light bg-dark border-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Q2: What are the key differences between useState and useReducer?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-light">
              A2: 
              <ul>
                <li>useState is suited for simple state management, while useReducer is ideal for managing more complex state logic with multiple actions.</li>
                <li>useState handles one variable at a time, while useReducer can handle complex updates with multiple state variables and actions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Question 3 */}
        <div className="accordion-item bg-dark border-light">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button text-light bg-dark border-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Q3: How does the dispatch function work in useReducer?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-light">
              A3: The dispatch function is used to trigger actions that modify the state. It takes an action object, which contains the type of action and optional data for the update.
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="accordion-item bg-dark border-light">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button text-light bg-dark border-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Q4: Can you use useReducer instead of useState? If yes, when is it more beneficial to use useReducer?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-light">
              A4: Yes, you can use useReducer instead of useState. It is more beneficial to use useReducer when the state logic is complex, involves multiple state variables, or when the state transitions depend on several actions.
            </div>
          </div>
        </div>

        {/* Question 5 */}
        <div className="accordion-item bg-dark border-light">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button text-light bg-dark border-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Q5: How do you initialize the state in useReducer?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body text-light">
              A5: You initialize the state in useReducer by providing an initial state as the second argument to the hook. This state is used as the default value when the component first renders.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseReducerQuestions;
