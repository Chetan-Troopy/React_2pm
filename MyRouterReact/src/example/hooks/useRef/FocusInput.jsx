import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);    // InitialValue = null

  useEffect(() => {
    // inputRef.current.focus(); // Auto-focus input on mount
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="text-success">Auto Focus Input</h3>
      <input ref={inputRef} className="form-control" type="text" placeholder="Type here..." />
    </div>
  );
}

export default FocusInput;
