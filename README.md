## Requirements

```
node -v
npm -v
```

## Install Raect Package

`npm install -g create-react-app`

## 1. Introduction to React:

React is a JavaScript library used for building user interfaces. It allows you to create reusable UI components and manage the application's state efficiently. You can get started by creating a basic React app using the Create React App tool:

`npx create-react-app my-app`

## 2. JSX (JavaScript XML):

JSX is a syntax extension for JavaScript often used in React. It allows you to write HTML-like code within your JavaScript files. Here's an example:

`const element = <h1>Hello, React!</h1>;`

## 3. Components and Rendering:

Components are the building blocks of React applications. You can create components as functions or classes. Here's a simple functional component:

```JSX
function MyComponent() {
  return <div>Hello from a functional component</div>;
}
```

## 4. Props and State:

Props (short for properties) allow you to pass data from a parent component to a child component. State is used for managing component-specific data. Here's an example of using props:

```JSX
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Alice" />;
```

## 5. Event Handling:

React components can handle events like click, submit, etc. Here's an example of handling a button click event:

```JSX
function MyComponent() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

## 6. Conditional Rendering:

You can conditionally render elements in React. For example, to show a message conditionally:

```JSX
function Greeting(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign up.</h1>;
  }
}
```

## 7. Lists and Keys:

In React, you can render lists of elements by using the map function. Keys are used to give React a way to identify each item in the list:

```JSX
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
  return <ul>{listItems}</ul>;
}
```

## 8. Controlled Components:

In controlled components, the value of the input element is directly tied to the component's state. This means the component has full control over the input's value.

Example: In a controlled component, you use the value prop to set the input field's value and an onChange event handler to update the component's state when the input changes.

```JSX
function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input type="text" value={inputValue} onChange={handleInputChange} />
  );
}
```

## 9. Uncontrolled Components:

In uncontrolled components, the value of the input element is not managed by React's state. Instead, you rely on the DOM and let the DOM handle the input's value.

Example: In an uncontrolled component, you don't set the value prop, and you rely on the default HTML behavior to manage the input element's value.

```JSX
function UncontrolledInput() {
  return <input type="text" />;
}
```

## 10. Lifecycle Methods

### Class Component Lifecycle Methods (Pre-React 16.3):

`constructor(props)`: This is the first method called when a component is created. It's used for setting up the initial state and binding event handlers.

`componentWillMount` (deprecated in React 16.3): This method is called just before a component is inserted into the DOM. It's rarely used now, as it can be replaced with componentDidMount.

`render()`: This is the most crucial method. It returns the JSX that will be rendered to the DOM.

`componentDidMount()`: This is called after the component has been rendered to the DOM. It's commonly used for making network requests, setting up subscriptions, or modifying the DOM.

`componentWillReceiveProps` (deprecated in React 16.3): This method is called when a component will receive new props. It's useful for updating the state based on prop changes.

`shouldComponentUpdate()`: This method is called before a re-render, and it allows you to control if the component should re-render or not. You can optimize performance by returning false if the component doesn't need to update.

`componentWillUpdate` (deprecated in React 16.3): This method is called just before the component is updated. It's rarely used now, as it can be replaced with componentDidUpdate.

`componentDidUpdate()`: This is called after the component has been re-rendered. It's useful for performing side effects after a component update.

`componentWillUnmount()`: This method is called just before the component is removed from the DOM. It's used for cleaning up resources like event listeners and subscriptions.

```JSX
class MyComponent extends React.Component {
  componentDidMount() {
    // Perform some side effect after the component mounts
  }

  componentDidUpdate(prevProps) {
    // Perform some side effect when the component updates
  }

  componentWillUnmount() {
    // Clean up resources before the component unmounts
  }

  render() {
    return <div>Component Content</div>;
  }
}
```

```jsx
class Counter extends React.Component {
  // Constructor to initialize state and bind methods
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  // Custom method to update the state
  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Class-based Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

### React 16.3 and Beyond:

With the introduction of React Hooks, you can manage state and side effects more cleanly and uniformly. Some equivalent Hooks for the above lifecycle methods are:

`useState`: Replaces the need for this.state and this.setState.

`useEffect`: Replaces componentDidMount, componentDidUpdate, and componentWillUnmount.

`useMemo and useCallback`: Offer performance optimizations similar to shouldComponentUpdate.

`useContext`: Replaces the need for contextTypes.

```JSX
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Perform some side effect after the component mounts
    return () => {
      // Clean up resources before the component unmounts
    };
  }, []);

  return <div>Component Content</div>;
}
```

## 11. React Fragments:

React Fragments allow you to group multiple elements without adding an extra div to the DOM. This can be especially useful when you don't want to introduce extra levels of nesting. Here's how you can use fragments:

```jsx
function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>Paragraph</p>
    </>
  );
}
```

## 12. Component Props Validation (PropTypes):

PropTypes are used to specify the type and shape of the props that a component should receive. You can define prop types for your components like this:

```jsx
import PropTypes from "prop-types";

function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
```

## 13. Prop drilling:

Prop drilling, also known as "prop passing," occurs when you need to pass data through multiple levels of nested components in a React application.

## 14. State Management:

State management in React involves handling and sharing data efficiently to maintain the application's state. Depending on the complexity of your application and the data sharing requirements, you can use `local component state`, `lift state up`, or employ `global state management` solutions like the Context API, Redux, or MobX. The choice of approach depends on the specific needs and scale of your application.

### Lifting State Up:

It's a way to share data between components that don't have a direct parent-child relationship.

```jsx
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <Display count={count} />
    </div>
  );
}

function Counter({ count, setCount }) {
  const increment = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function Display({ count }) {
  return <p>Display Count: {count}</p>;
}
```

### Context API -

Managing global state using the React Context API. In this example, we'll create a simple global theme switcher using context to share the current theme throughout the application. The theme can be "light" or "dark," and components can consume and change the theme using the context.

```jsx
import React, { createContext, useContext, useState } from "react";
import "./App.css";

// Create a new context for the theme.
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light"); // Initial theme is 'light'.

  const toggleTheme = () => {
    // Toggle the theme between 'light' and 'dark'.
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <Header />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </header>
  );
}

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <section>
        <h2>Content Section</h2>
        <p>This is the content of the application.</p>
      </section>
    </main>
  );
}

export default App;
```
