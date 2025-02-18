import React from "react";
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "./firebase";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

// const db = getDatabase(app);

function App() {


  // const putData = () => {
  //   set(ref(db, "users/chetan"), {
  //     id: 2,
  //     name: "Hiren",
  //     age: 22,
  //   });
  // };

  return (
    <>
    <div className="container">
      <h1>React With Firebase</h1>
      <SignUp/>

      <SignIn/>
      {/* <button className="btn btn-primary" onClick={putData}>Put Data</button> */}
    </div>
    </>
  );
}

export default App;
