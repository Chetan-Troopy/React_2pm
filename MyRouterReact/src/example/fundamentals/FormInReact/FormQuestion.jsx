import React from 'react'

function FormQuestion() {
    return (
      <div>
        <h2>Quiz: Forms in React</h2>
        
        <h3>Q1: What is a controlled component in React?</h3>
        <p>A: A controlled component is a form element whose value is controlled by React state. The value of the input is updated through state changes, and React manages the input field's behavior.</p>
  
        <h3>Q2: How do you handle form submission in React?</h3>
        <p>A: Form submission in React is handled by creating an onSubmit function that prevents the default form behavior using event.preventDefault() and then executing the desired logic (e.g., validation or sending data to an API).</p>
  
        <h3>Q3: What is the purpose of validation in forms, and how is it handled in React?</h3>
        <p>A: Validation ensures that the user input is correct before form submission. In React, it can be handled by checking the state values before submission and providing feedback (e.g., error messages) to the user.</p>
  
        <h3>Q4: How can you manage form state in React?</h3>
        <p>A: Form state in React is managed using useState (in functional components) or this.setState (in class components). Each form field is linked to a state variable, which is updated as the user interacts with the form.</p>
  
        <h3>Q5: Why is it important to use controlled components in React?</h3>
        <p>A: Controlled components provide better control over the form’s behavior, making it easier to manage, validate, and modify input data. They ensure that the form is always in sync with the component state.</p>
      </div>
    );
  }
  

export default FormQuestion