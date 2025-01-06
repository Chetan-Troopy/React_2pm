import React, { useReducer } from 'react';

// 1. Initial State
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

// 2. Reducer Function
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

function FormReducerComp() {
  // 3. Use useReducer
  const [state, dispatch] = useReducer(formReducer, initialState);

  // 4. Handle input change
  const handleChange = (e) => {
    dispatch({
      type: 'SET_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  // 5. Validate form and handle submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validation for name
    if (state.name.trim() === '') {
      dispatch({
        type: 'SET_ERROR',
        field: 'name',
        message: 'Name is required',
      });
      isValid = false;
    }

    // Validation for email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(state.email)) {
      dispatch({
        type: 'SET_ERROR',
        field: 'email',
        message: 'Invalid email address',
      });
      isValid = false;
    }

    // Validation for password
    if (state.password.length < 6) {
      dispatch({
        type: 'SET_ERROR',
        field: 'password',
        message: 'Password must be at least 6 characters long',
      });
      isValid = false;
    }

    if (isValid) {
      alert('Form submitted successfully!');
      dispatch({ type: 'RESET_FORM' });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FormReducerComp;
