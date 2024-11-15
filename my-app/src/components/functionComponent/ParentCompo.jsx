import React from "react";
import ChildCompo from "./ChildCompo";

function ParentCompo() {
    
    const greetMorning = () => {
      alert("Namaste Morning");
      
    };
    const greetAfter = () => {
      alert("Namaste Afternoon");
      
    };
  return (
    <>
    <div className="container text-bg-dark py-3">
      <h1 className="text-decoration-underline text-center pb-5">Props</h1>

      <ChildCompo name="Chetan" age="28" onClick={greetMorning} />
      <ChildCompo name="Dev" age="21" onClick={greetAfter}/>
      <ChildCompo name="Hiren" age="20" />
      <ChildCompo name="Kalpesh" age="28" />
      <ChildCompo name="Maya" age="22" />
    </div>


      {/* <button onClick={greet}>Click ME</button> */}
    </>
  );
}

export default ParentCompo;
