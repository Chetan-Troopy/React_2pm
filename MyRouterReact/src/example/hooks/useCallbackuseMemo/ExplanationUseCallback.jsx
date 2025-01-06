import React from "react";

function ExplanationUseCallback() {
  return (
    <>
      <div>
        <h2>What is useCallback?</h2>
        <p>
          The `useCallback` hook is used to memoize functions. It ensures that a
          function is not recreated on every render, which helps avoid
          unnecessary re-renders of child components that rely on the function.
        </p>
        <p>
          It's helpful when passing functions to child components, preventing
          them from re-rendering unless it's really necessary.
        </p>
      </div>
    </>
  );
}

export default ExplanationUseCallback;
