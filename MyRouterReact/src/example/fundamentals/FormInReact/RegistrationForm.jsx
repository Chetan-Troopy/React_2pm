import React, { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

 

  function handleSubmit(e) {
    e.preventDefault()
    
  }
  return (
    <>
      <div className="container text-bg-dark p-3 border border-4">
        <h1>My Form</h1>
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={userEmail}
                required
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="col ">
              <button className="my-4 btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
        <hr />
        <div className="col text-bg-success p-3 my-5 border border-4">
          <h1 className="my-3 text-decoration-underline">Preview</h1>
          <h2>
            Name : {firstName} {lastName}
          </h2>
          <h2>Email : {userEmail}</h2>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
