import React from "react";
import CondtionalDemo from "./CondtionalDemo";
import ButtonClickConditional from "./ButtonClickConditional";

function ConditionInReact() {
  return (
    <>
      <div className="container text-bg-dark p-3">
        <h1>Condition In React</h1>

    <div className="row text-bg-warning">
        <div className="col-6">

        <CondtionalDemo/>
        </div>
        <div className="col-6">
            <ButtonClickConditional/>
        </div>
    </div>


      </div>
    </>
  );
}

export default ConditionInReact;
