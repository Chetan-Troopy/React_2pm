import React from 'react'
import ExplanationUseMemo from './ExplanationUseMemo'
import ExampleUseMemo from './ExampleUseMemo'
import ExplanationUseCallback from './ExplanationUseCallback'
import ExampleUseCallback from './ExampleUseCallback'
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
        <ExplanationUseCallback/>
        <ExampleUseCallback/>
        <ParentComponentUseCallback/>
        <h2>Tasks for useCallback</h2>
        {/* <DebounceSearch /> */}
        {/* <ParentComponent /> */}
      </div>
    </>
  )
}

export default ExplanationComp





// Key Difference 

// -> useCallback - Memoizes a function itself
// -> useMemo - Memoizes the result of a Computation


// When to Use 

//  UseCallback : use when passing functions down to child components or when using a function in hooks
            //    like useEffect or useMemo

//  UseMemo : Use when performing expensive calculations or creating derived data that should not be recalculated
      //      unless its dependencies changes