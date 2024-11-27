import React from "react";

function FormPracticalTask() {
  return (
    <>
      <h2>Practical Task: Build a Registration Form with Validation</h2>
      <p>
        <strong>Objective:</strong> Create a simple registration form that
        collects the user's name, email, and password. The form should have the
        following features:
      </p>
      <ul>
        <li>Each input should be a controlled component.</li>
        <li>
          Implement basic validation:
          <ul>
            <li>The name field should not be empty.</li>
            <li>The email field should be a valid email address.</li>
            <li>The password should be at least 6 characters long.</li>
          </ul>
        </li>
        <li>Display error messages if the validation fails.</li>
        <li>
          When the form is valid, display an alert with the entered information.
        </li>
      </ul>

      <p>
        <strong>Instructions:</strong>
      </p>
      <ul>
        <li>Use useState to manage the state for name, email, and password.</li>
        <li>Implement validation logic for each input.</li>
        <li>Conditionally display error messages if any field is invalid.</li>
        <li>Use onSubmit to handle form submission and prevent page reload.</li>
      </ul>

      <p>
        <strong>Expected Output:</strong> The form should show error messages if
        the user tries to submit invalid data. If all fields are valid, the form
        should display an alert with the entered values.
      </p>
    </>
  );
}

export default FormPracticalTask;
