import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from './firebase'

const auth = getAuth(app);

function SignIn() {
  const userSignIn = () => {
    signInWithEmailAndPassword(auth, "chetan@google.com", "chetan?123")
      .then(() => alert("Sign in success!"))
      .catch((err) => console.log(err));
  };

  return <>
  <h1>Sign In</h1>
  <button className="btn btn-primary" onClick={userSignIn}>User Sign In</button>
    
  
  </>;
}

export default SignIn;
