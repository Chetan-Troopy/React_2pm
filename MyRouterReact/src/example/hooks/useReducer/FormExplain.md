## 1. Imports

```javascript
import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
```

React: Imports the core React library to use its features (such as components).
useReducer: A React hook for managing complex state logic in components. It is an alternative to useState when state updates depend on previous state.
'bootstrap/dist/css/bootstrap.min.css': Imports Bootstrap's CSS to apply pre-styled, responsive UI components like forms, buttons, etc.
2. Initial State
javascript
Copy code
const initialState = {
  name: '',
  email: '',
  password: '',
  errors: {
    name: '',
    email: '',
    password: '',
  },
};
The initialState is an object that holds the form data and any validation errors.
name, email, password: Stores the current value of the corresponding input fields.
errors: An object to track validation errors for each field (name, email, password).
3. Reducer Function
javascript
Copy code
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.message,
        },
      };
    case 'RESET_FORM':
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
The formReducer is a function that manages the state updates based on the dispatched actions.
SET_FIELD: Updates a specific form field (e.g., name, email, password) with the new value from the input field.
SET_ERROR: Updates the errors object with the validation message for a specific field.
RESET_FORM: Resets the form to its initial state (clear the input values and errors).
4. Form Component (FormReducerComp)
javascript
Copy code
function FormReducerComp() {
  const [state, dispatch] = useReducer(formReducer, initialState);
useReducer is called here to initialize the form's state using the formReducer function and the initialState.
state: Holds the current form data and error messages.
dispatch: A function used to trigger state updates based on dispatched actions.
5. Handling Input Changes
javascript
Copy code
const handleChange = (e) => {
  dispatch({
    type: 'SET_FIELD',
    field: e.target.name,
    value: e.target.value,
  });
};
handleChange is triggered whenever an input field is modified. It dispatches the SET_FIELD action to update the corresponding field (e.g., name, email, or password) in the form's state.
6. Form Validation and Submission
javascript
Copy code
const handleSubmit = (e) => {
  e.preventDefault();
  let isValid = true;
handleSubmit is called when the form is submitted. It:
Prevents the default form submission behavior using e.preventDefault().
Sets isValid to true, which tracks whether the form passes all validation checks.
Validation Logic:
Name Validation:
If the name field is empty, dispatches SET_ERROR with a validation message: "Name is required."
Email Validation:
Uses a regular expression (emailPattern) to check if the entered email is valid.
If invalid, dispatches an error message.
Password Validation:
Checks if the password is at least 6 characters long.
If not, dispatches an error message.
If the form is valid, it displays a success message using alert('Form submitted successfully!') and resets the form by dispatching RESET_FORM.

7. Form Rendering
javascript
Copy code
return (
  <div className="container mt-5">
    <h2>Registration Form</h2>
    <form onSubmit={handleSubmit}>
      {/* Name Input */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`form-control ${state.errors.name ? 'is-invalid' : ''}`}
          value={state.name}
          onChange={handleChange}
        />
        {state.errors.name && <div className="invalid-feedback">{state.errors.name}</div>}
      </div>

      {/* Email Input */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control ${state.errors.email ? 'is-invalid' : ''}`}
          value={state.email}
          onChange={handleChange}
        />
        {state.errors.email && <div className="invalid-feedback">{state.errors.email}</div>}
      </div>

      {/* Password Input */}
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className={`form-control ${state.errors.password ? 'is-invalid' : ''}`}
          value={state.password}
          onChange={handleChange}
        />
        {state.errors.password && <div className="invalid-feedback">{state.errors.password}</div>}
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);
The form is structured using Bootstrap classes (form-control, invalid-feedback, etc.).
For each input field (name, email, password), we:
Bind the value to the corresponding state (state.name, state.email, state.password).
Use handleChange to update the state when a user types in the field.
Conditionally apply the is-invalid class to show the error message if a field has an error.
Display the error message below the input field using Bootstrap's invalid-feedback class if an error exists.
Conclusion:
useReducer provides a powerful way to manage complex form states (with multiple fields and error messages).
The form has basic client-side validation (name, email, password) and displays error messages using Bootstrap's styling.
Upon successful validation, the form submits the data and resets.