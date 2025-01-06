import React from 'react'
import ExplanationUseMemo from './ExplanationUseMemo'
import ExampleUseMemo from './ExampleUseMemo'
import ParentComponentUseCallback from './ParentComponentUseCallback'

function ExplanationComp() {
  return (
    <>
     <div>
        <ExplanationUseMemo />
        <ExampleUseMemo />
        <h2>Tasks for useMemo</h2>
        {/* <FilterList /> */}
        {/* <ShoppingCart /> */}
        {/* <FibonacciCalculator /> */}
        <h2>Tasks for useCallback</h2>
        <ParentComponentUseCallback />
        {/* <DebounceSearch /> */}
        {/* <ParentComponent /> */}
      </div>
    </>
  )
}

export default ExplanationComp