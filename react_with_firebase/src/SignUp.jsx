import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

function SignUp() {
  const createUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "chetan@google.com",
      "chetan?123"
    ).then((value) => console.log(value));
  };

  return <>
  <h1>Sign Up</h1>
  <button className="btn btn-primary" onClick={createUser}>Create User</button>
  </>;
}

export default SignUp;
