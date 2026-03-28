# React Notes

### What is JSX, and why is it used?
- JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code directly inside React.
- Why use it: It makes the code easier to write and read.

---

### What is the difference between State and Props?

**Props**
- Definition: Data passed from a parent to a child.
- Mutability: Immutable
- Purpose: To configure or share data.

**State**
- Definition: Data managed within the component.
- Mutability: Mutable
- Purpose: To handle dynamic changes.

---

### What is the useState hook, and how does it work?
useState is a function that lets functional components track and update internal data.
How it works: It returns an array with two values: the current state and a function to update it.

---

### How can you share state between components in React?
- Move the state to the closest common parent and pass it down via props.
- passing props through many levels

---

### How is event handling done in React?
1. CamelCase naming
2. Function references `<button onClick={handleClick}>`