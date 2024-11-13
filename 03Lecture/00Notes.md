# JSX Syntax

> JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript, typically used with React. It is a way to describe what the UI should look like in a declarative manner. Here are the key points about JSX syntax:


1. HTML-like Syntax

> JSX looks very similar to HTML, but there are a few differences.

2. Elements must be closed:

> In JSX, every tag must be properly closed (self-closing or 
with an explicit closing tag). 

3. Attributes use camelCase: 

> In JSX, attributes are written in camelCase rather than lowercase.

4. JSX Must Have One Parent Element

> Each JSX expression must have a single parent element. This means you can't return multiple sibling elements without wrapping them in a single container element like a div or section. Alternatively, you can use React.Fragment or the shorthand <> </>. 

5. JavaScript Expressions in Curly Braces

> You can embed JavaScript expressions inside JSX by using curly braces {}. This includes variables, function calls, or operations.

6. No JavaScript Expressions Outside Curly Braces

> Only expressions can be placed inside curly braces. You cannot have a JavaScript statement (like an if statement or for loop) directly in JSX.

7. No class Attribute

> In JSX, you cannot use the class attribute because it conflicts with the class keyword in JavaScript. Instead, use className to define CSS classes.

8. Avoid Using Reserved JavaScript Keywords

> Avoid using JavaScript reserved keywords like for, return, new, etc., as attribute names. For example, you cannot use for as an attribute in JSX, but you can use htmlFor instead.


# Components 