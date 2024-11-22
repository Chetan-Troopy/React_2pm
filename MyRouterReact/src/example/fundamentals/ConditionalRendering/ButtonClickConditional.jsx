import React from "react";

const marks = 75;
function ButtonClickConditional() {
  function handleMarksClick() {
    console.log(marks);
    if (marks > 80) {
      alert("Passed");
    } else {
      alert("Try Again");
    }
  }

  return (
    <>
      <h2>Button Click</h2>

      <button className="btn btn-primary mb-2" onClick={handleMarksClick}>
        Click Me
      </button>

    </>
  );
}

export default ButtonClickConditional;
