import React, { useState } from "react";

function RegistrationFormOneState() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    userEmail: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Log the form data to the console
    console.log("Submitted data:", formData);
    
    // Clear the form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      password: "",
      userEmail: "",
    });
  }

  return (
    <>
      <div className="container text-bg-dark p-3 border border-4">
        <h1>My Form Using One State</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <label className="mb-1 fs-4" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter Your First Name..."
                className="form-control w-75"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <label className="mb-1 fs-4" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Your Last Name..."
                className="form-control w-75"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label className="mb-1 fs-4" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password..."
                className="form-control w-75"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label className="mb-1 fs-4" htmlFor="userEmail">
                Email
              </label>
              <input
                type="email"
                name="userEmail"
                placeholder="Enter Your Email..."
                className="form-control w-75"
                required
                value={formData.userEmail}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <button className="my-4 btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
        <hr />
        <div className="col text-bg-success p-3 my-5 border border-4">
          <h1 className="my-3 text-decoration-underline">Preview</h1>
          <h2>
            Name : {formData.firstName} {formData.lastName}
          </h2>
          <h2>Email : {formData.userEmail}</h2>
        </div>
      </div>
    </>
  );
}

export default RegistrationFormOneState;
