import React from "react";
import FormQuestion from "./FormQuestion";
import FormPracticalTask from "./FormPracticalTask";
import RegistrationForm from "./RegistrationForm";

function FormExplanation() {
  return (
    <>
      <div className="container bg-warning text-dark p-3 border border-4">
        <h2>Lecture: Handling Forms in React</h2>
        <h3>1. Creating Controlled Components for Handling Forms</h3>
        <p>
          Explanation: In React, controlled components are form elements (like{" "}
          <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and{" "}
          <code>&lt;select&gt;</code>) whose values are controlled by React
          state. This means that the form’s state is stored in a React
          component, and the form fields’ values are updated through state
          changes.
        </p>
        <p>
          Key Concept: A controlled component is a form element whose value is
          bound to a state variable. When the user inputs data, the state is
          updated, and the component re-renders with the new value.
        </p>

        <h4>Example:</h4>
        <pre>
          {`
            import React, { useState } from 'react';

            function ControlledForm() {
            const [inputValue, setInputValue] = useState('');

            const handleChange = (event) => {
                setInputValue(event.target.value);
            };

            const handleSubmit = (event) => {
                event.preventDefault();
                alert('Form Submitted: ' + inputValue);
            };

            return (
                <form onSubmit={handleSubmit}>
                <label>
                    Enter Text:
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
                </form>
            );
            }
        `}
        </pre>

        <h3>2. Handling Form Submissions</h3>
        <p>
          Explanation: Handling form submissions in React involves intercepting
          the form’s submit event and performing actions like data validation,
          sending data to an API, or updating the UI.
        </p>
        <p>
          React provides an <code>onSubmit</code> handler for forms, which
          allows you to manage form submission behavior.
        </p>

        <h4>Example:</h4>
        <pre>
          {`
            function HandleFormSubmit() {
            const [name, setName] = useState('');

            const handleChange = (event) => {
                setName(event.target.value);
            };

            const handleSubmit = (event) => {
                event.preventDefault();
                alert(\`Hello, \${name}!\`);
            };

            return (
                <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    />
                </label>
                <button type="submit">Submit</button>
                </form>
            );
            }
        `}
        </pre>

        <h3>3. Handling Form Validations</h3>
        <p>
          Explanation: Validations ensure that the user provides the correct
          input before submitting the form. In React, validation can be handled
          by checking the state values before submission and providing feedback
          to the user.
        </p>

        <h4>Example:</h4>
        <pre>
          {`
            function FormWithValidation() {
            const [email, setEmail] = useState('');
            const [error, setError] = useState('');

            const handleChange = (event) => {
                setEmail(event.target.value);
            };

            const handleSubmit = (event) => {
                event.preventDefault();
                if (!email.includes('@')) {
                setError('Please enter a valid email address');
                } else {
                setError('');
                alert('Form submitted');
                }
            };

            return (
                <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    />
                </label>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Submit</button>
                </form>
            );
            }
        `}
        </pre>

        <div className="container text-light bg-danger py-4 my-3">
          <RegistrationForm/>
        </div>
        <div className="container text-light bg-dark py-4 my-3">
          <FormQuestion />
        </div>
        <div className="container text-light bg-dark py-4 my-3">
          <FormPracticalTask />
        </div>
      </div>
    </>
  );
}

export default FormExplanation;
