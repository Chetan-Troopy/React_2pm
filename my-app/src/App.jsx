import React from "react";
import NavbarNew from "./components/webpage/NavbarNew";
import Slider from "./components/webpage/Slider";
import CardBody from "./components/webpage/CardBody";
// import GreetInClass from "./components/classComponent/GreetInClass";
// import GreetInFunction from "./components/functionComponent/GreetInFunction";
// import Navbar from "./components/functionComponent/Navbar";

function App() {
  return (
    // Fragement
    <>

      <NavbarNew/>
      <Slider/>
    <CardBody/>

      {/* <Navbar />
      <div className="container text-center fw-bold">
        <div className="row">
          <div className="col"><GreetInClass /></div>
          <div className="col"><GreetInFunction /></div>
        </div>
      </div> */}
    </>
  );
}

export default App;
