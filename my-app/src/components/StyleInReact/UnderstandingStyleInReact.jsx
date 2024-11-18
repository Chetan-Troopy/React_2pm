import React from "react";
import InlineStyle from "./InlineStyle";
import CssStylesheets from "./CssStylesheets";
import CssStyleSheetModule from "./CssStyleSheetModule";
import StyledComponent from "./StyledComponent";

const UnderstandingStyleInReact = () => {
  return (
    <div className="text-dark bg-warning p-3">
      <h2>1. Different Approaches to Styling React Applications</h2>
      <p>
        There are several approaches to styling React components, and the choice
        of method depends on factors like project complexity, performance, and
        maintainability. Common methods include:
      </p>
      <ul>
        <li>
          <strong>Inline Styling</strong>: Styles are defined directly in the
          component using JavaScript objects.
        </li>
        <li>
          <strong>CSS Stylesheets</strong>: Traditional external CSS files
          linked to React components.
        </li>
        <li>
          <strong>CSS Modules</strong>: Scoped CSS classes to avoid conflicts.
        </li>
        <li>
          <strong>Styled Components</strong>: A library for writing CSS inside
          JavaScript using tagged template literals.
        </li>
        <li>
          <strong>CSS-in-JS Libraries</strong>: Tools like styled-components or
          emotion that allow writing styles inside JavaScript.
        </li>
      </ul>
      <h3>When to Use:</h3>
      <ul>
        <li>
          Use inline styling for quick styling or when you need dynamic styles.
        </li>
        <li>
          Use CSS stylesheets for simple applications or when you're working
          with existing CSS.
        </li>
        <li>
          Use CSS modules for scoped styles in larger apps to avoid global style
          conflicts.
        </li>
        <li>
          Use styled-components or CSS-in-JS for more complex and dynamic styles
          with a component-based architecture.
        </li>
      </ul>

      <h2>2. Inline Styling</h2>
      <p>
        Inline styles are defined in JavaScript objects and applied directly to
        the component’s elements using the style attribute.
      </p>
      <pre>{`
        function Button() {
          const buttonStyle = {
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
          };

          return <button style={buttonStyle}>Click Me!</button>;
        }
      `}</pre>
      <h3>Pros:</h3>
      <ul>
        <li>Quick and easy for small projects or dynamic styling.</li>
        <li>Allows dynamic changes to styles based on state or props.</li>
      </ul>
      <h3>Cons:</h3>
      <ul>
        <li>Limited support for pseudo-classes (e.g., :hover, :focus).</li>
        <li>Cannot define media queries or animations directly.</li>
        <li>Less separation of concerns (styles are mixed with logic).</li>
      </ul>

      <h2>3. CSS Stylesheets</h2>
      <p>
        Traditional CSS stylesheets are external files linked to React
        components. This is similar to regular web development.
      </p>
      <pre>{`
        /* styles.css */
        button {
          background-color: blue;
          color: white;
          padding: 10px;
          border-radius: 5px;
        }

        /* In the React component */
        import './styles.css';

        function Button() {
          return <button>Click Me!</button>;
        }
      `}</pre>
      <h3>Pros:</h3>
      <ul>
        <li>Separation of concerns between HTML, JavaScript, and CSS.</li>
        <li>Easy to manage in small to medium-sized projects.</li>
        <li>CSS is globally available and reusable.</li>
      </ul>
      <h3>Cons:</h3>
      <ul>
        <li>Global scope can cause class name conflicts.</li>
        <li>
          May not work well with large, complex React applications due to
          difficulty in managing styles.
        </li>
      </ul>

      <h2>4. CSS Modules</h2>
      <p>
        CSS Modules are a way to scope CSS to individual components. Each class
        name is locally scoped by default, preventing style conflicts.
      </p>
      <pre>{`
        /* Button.module.css */
        .button {
          background-color: blue;
          color: white;
          padding: 10px;
          border-radius: 5px;
        }

        /* In the React component */
        import styles from './Button.module.css';

        function Button() {
          return <button className={styles.button}>Click Me!</button>;
        }
      `}</pre>
      <h3>Pros:</h3>
      <ul>
        <li>Locally scoped styles prevent class name conflicts.</li>
        <li>Maintains separation of concerns.</li>
        <li>More scalable for larger applications.</li>
      </ul>
      <h3>Cons:</h3>
      <ul>
        <li>Requires additional setup (e.g., webpack configuration).</li>
        <li>Can lead to slightly more complex file structures.</li>
      </ul>

      <h2>5. Styled Components</h2>
      <p>
        Styled-components is a popular library for writing CSS inside
        JavaScript. It uses tagged template literals to define styles in the
        component itself.
      </p>
      <pre>{`
        import styled from 'styled-components';

        const Button = styled.button\`
          background-color: blue;
          color: white;
          padding: 10px;
          border-radius: 5px;
        \`;

        function App() {
          return <Button>Click Me!</Button>;
        }
      `}</pre>
      <h3>Pros:</h3>
      <ul>
        <li>Scoped styles, ensuring no global conflicts.</li>
        <li>Dynamic styling via props (e.g., conditional styles).</li>
        <li>Full support for pseudo-classes and media queries.</li>
      </ul>
      <h3>Cons:</h3>
      <ul>
        <li>Adds an extra dependency to your project.</li>
        <li>
          Can lead to performance issues if not used properly in large
          applications.
        </li>
      </ul>

      <h2>6. CSS-in-JS Libraries Overview (Emotion, Styled-Components)</h2>
      <p>
        CSS-in-JS libraries like styled-components and emotion allow you to
        write CSS directly inside your JavaScript code. They both enable scoped
        styling and dynamic theming.
      </p>
      <p>
        <strong>Difference:</strong> styled-components uses tagged template
        literals for styling. Emotion is similar but has a slightly different
        API and more flexibility in syntax.
      </p>
      <h3>Use Cases:</h3>
      <ul>
        <li>
          Use CSS-in-JS for component-level styles with dynamic behavior,
          themes, or media queries.
        </li>
        <li>
          Use libraries like styled-components when you need scoped, reusable,
          and dynamic styles.
        </li>
      </ul>

      <h2>7. Dynamic Styling</h2>
      <p>
        Dynamic styling allows you to modify styles based on component state or
        props. It can be done using inline styles or CSS-in-JS.
      </p>
      <pre>{`
        const Button = styled.button\`
          background-color: \${props => props.primary ? 'blue' : 'gray'};
          color: white;
        \`;

        function App() {
          return <Button primary={true}>Click Me!</Button>;
        }
      `}</pre>
      <h3>Pros:</h3>
      <ul>
        <li>
          Allows real-time styling changes based on user interaction or state.
        </li>
        <li>Very powerful when combined with React’s state or props.</li>
      </ul>

      <h2>8. Styling Best Practices</h2>
      <h3>Explanation:</h3>
      <ul>
        <li>
          Consistency: Choose one styling method and stick with it across the
          project for consistency.
        </li>
        <li>
          Component-Based: Use component-level styles (CSS Modules or
          styled-components) for better scalability.
        </li>
        <li>
          Avoid Inline Styles for Complex Layouts: For larger projects, prefer
          CSS Modules or styled-components over inline styles.
        </li>
        <li>
          Performance Considerations: Avoid overusing inline styles in large
          applications, as it can lead to performance degradation.
        </li>
      </ul>
      <h3>Best Practice:</h3>
      <ul>
        <li>
          Use CSS Modules or styled-components for scalable, maintainable, and
          dynamic styles in React.
        </li>
        <li>
          Keep your styles isolated to components to avoid global conflicts.
        </li>
        <li>Use external CSS for global styles (e.g., reset or fonts).</li>
      </ul>

      <div className="container text-light bg-danger py-4 my-3">
        <h1>Different Approaches to Styling in React</h1>
        <h2>1. Inline Styling</h2>
        <InlineStyle/>

        <h2>2. CSS Stylesheets</h2>
        <CssStylesheets/>

        <h2>3. CSS Modules</h2>
        <CssStyleSheetModule/>

        <h2>4. Styled Components</h2>
        <StyledComponent/>
      </div>

      <div className="text-white bg-dark border border-2 border-success p-5 my-3">
        <h1 className="pb-3">Q&A: Styling in React</h1>

        <div>
          <h2>
            Q1: What is the main advantage of using CSS Modules over traditional
            CSS stylesheets in React?
          </h2>
          <p>
            <strong>A:</strong> The main advantage of CSS Modules is that it
            scopes CSS styles to individual components, preventing class name
            conflicts and making styles more manageable in large applications.
          </p>
        </div>

        <div>
          <h2>
            Q2: What is the difference between inline styling and
            styled-components in React?
          </h2>
          <p>
            <strong>A:</strong> Inline styling involves directly passing a
            JavaScript object with styles to an element using the{" "}
            <code>style</code> attribute. Styled-components, on the other hand,
            is a library that lets you write CSS in JavaScript with tagged
            template literals, providing scoped and reusable styles.
          </p>
        </div>

        <div>
          <h2>
            Q3: When would you choose to use inline styles in React, and what is
            one limitation of this approach?
          </h2>
          <p>
            <strong>A:</strong> Inline styles are best for quick, dynamic
            styling or when you need to apply styles based on component state or
            props. A limitation is that inline styles don’t support
            pseudo-classes like
            <code>:hover</code> or <code>:focus</code>.
          </p>
        </div>

        <div>
          <h2>
            Q4: What is one key benefit of using styled-components in React?
          </h2>
          <p>
            <strong>A:</strong> One key benefit of using styled-components is
            that it allows for scoped styling, meaning styles are applied only
            to the component, avoiding conflicts with other components.
          </p>
        </div>

        <div>
          <h2>
            Q5: What is the purpose of dynamic styling in React, and how can it
            be achieved?
          </h2>
          <p>
            <strong>A:</strong> Dynamic styling allows for conditional style
            changes based on component state or props. It can be achieved using
            inline styles, CSS-in-JS libraries like styled-components, or
            conditional class names in CSS Modules.
          </p>
        </div>
      </div>

      <div className="text-white bg-dark border border-2 border-success p-5 my-3">
      <h1 className="pb-3">Practical Task</h1>
      <h2>Task: Create a Dynamic Button Component with Different Styles</h2>
      <h3>Objective:</h3>
      <p>
        Build a Button component that changes its background color based on a <code>primary</code> prop. Use either
        inline styles, CSS Modules, or styled-components to style the button.
      </p>
      <h3>Instructions:</h3>
      <ul>
        <li>
          Create a Button component that accepts a <code>primary</code> prop.
        </li>
        <li>
          If <code>primary</code> is true, the button should have a blue background; else, it should have a gray
          background.
        </li>
        <li>Style the button using one of the following methods:</li>
        <ul>
          <li>
            <strong>Inline Styles:</strong> Define the styles in an object and apply them directly using the{' '}
            <code>style</code> attribute.
          </li>
          <li>
            <strong>CSS Modules:</strong> Create a CSS Module with scoped styles and conditionally apply the class name
            based on the <code>primary</code> prop.
          </li>
          <li>
            <strong>Styled-Components:</strong> Use styled-components to define the button style and apply dynamic
            background color based on the prop.
          </li>
        </ul>
      </ul>
    </div>
    </div>
  );
};

export default UnderstandingStyleInReact;
