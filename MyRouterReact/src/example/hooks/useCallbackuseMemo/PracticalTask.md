# Tasks for useCallback

1. Button Click Counter

> Create a component with multiple buttons, each incrementing a separate counter. Use useCallback to optimize the function passed as onClick to the buttons.

2. Child Component Update Optimization

> Build a parent component that renders a child component receiving a callback function as a prop. Use useCallback to ensure the child component doesn't re-render unnecessarily.

3. Search Input with Debouncing

> Implement a search input that fetches data as the user types. Use useCallback to debounce the search function and prevent frequent API calls.

4. Dynamic List Filter

> Create a list of items with a filter input. Use useCallback to memoize the filtering function so it doesn't get re-created on every render.

5. Event Listener with Cleanup

> Attach and detach a mousemove event listener using useCallback. Log the cursor's position only when the mouse is moving.

5. Form Validation with Reusable Handlers

> Implement a form with multiple input fields. Use useCallback for shared change handlers to validate the inputs efficiently.

7. Custom Hook with useCallback

> Create a custom hook useCounter that provides increment, decrement, and reset functions. Use useCallback for these functions to avoid re-creation on every render.

8. Expensive Computation in a Button Handler

> Build a button that performs an expensive calculation (e.g., factorial). Use useCallback to optimize the button's onClick handler.

9. Managing Timer with useCallback

> Create a timer app where the user can start, stop, and reset the timer. Use useCallback for the timer controls to ensure they don't re-create unnecessarily.

10. Multiple Click Handlers in a Table

> Render a table with multiple rows and columns, where each cell has a button. Use useCallback to optimize the click handler for each button.

# Tasks for useMemo

1. Expensive Calculation with useMemo

> Display the factorial of a number input by the user. Use useMemo to optimize the calculation so it only re-runs when the input changes.

2. Filtered and Sorted List

> Render a list of items that can be filtered and sorted by the user. Use useMemo to avoid re-computing the filtered/sorted list on every render.

3. Component with Derived State

> Build a component where the total price of items in a shopping cart is calculated. Use useMemo to calculate the total only when the cart items or quantities change.

4. Expensive Computation in Table Rows

> Display a table where each row performs an expensive computation (e.g., finding prime numbers). Use useMemo to optimize the computation.

5. Memoized Conditional Rendering

> Render a component with complex conditional logic (e.g., nested if statements). Use useMemo to avoid recalculating the render logic on every update.

6. Search Suggestions

> Implement a search bar that shows suggestions from a large dataset. Use useMemo to memoize the filtered suggestions based on user input.

7. Dynamic Chart Rendering

> Create a chart component that updates when the data changes. Use useMemo to optimize the chart's dataset processing.

8. Sorting Data in Tables

> Render a data table with sortable columns. Use useMemo to memoize the sorted data when the sorting criteria change.

9. Optimized API Data Parsing

> Fetch data from an API and parse it into a specific format (e.g., grouping by categories). Use useMemo to ensure the parsing logic only runs when the data changes.

10. Pagination for Large Datasets

> Build a paginated list of items. Use useMemo to calculate the items displayed on the current page, based on the total dataset and current page number.
