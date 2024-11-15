1. What are props in React, and why are they important?

> Props are pieces of data passed from a parent component to a child component. They help components talk to each other and make your app more dynamic. Without props, a component would be stuck with static data and wouldn't be able to react to changes.

2. Can props be modified within the child component? Why or why not?

> No, props cannot be changed by the child component. They are read-only, meaning the child can only use the data passed by the parent. If the child wants to change something, it can ask the parent to update the data.

3. How do props differ from state in React?

> Props come from the parent component and can't be changed by the child.

State is internal data that belongs to a component, and it can change over time. Components use state to remember things like user input or whether a button is clicked.

4. Explain how defaultProps works in React and when it’s useful.

> defaultProps provides default values for props. If a parent component doesn't send a prop, the child can still use a default value. This helps prevent errors and ensures your components work even without certain props.

5. What is PropTypes, and how does it benefit the development process?

> PropTypes is a tool that checks if the right type of data is passed to a component. For example, it will warn you if you accidentally pass a number instead of a string. It helps catch mistakes early and makes your code safer and easier to understand.
