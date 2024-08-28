---
title: 6 React Tips & Tricks for beginners.
description: You will learn some important tips and best practices when developing your apps with react.js
date: 2024-08-28 10:30:00
image: /assets/img/react/6-react-tips-and-tricks.png
category: js
background: '#60cae1'
---

![React](../assets/img/react/6-react-tips-and-tricks.png)

## 1 - Use self-closing tags
keep your code clan by using self-closing tags.

❌ Bad: too verbose
```jsx
<MyComponent></MyComponent>
```

✅ Good
```jsx
<MyComponent />
```

## 2 - Prefer fragments
Avoid unnecessary `<div>` tags. Use `<>` fragment to keep the DOM clean.

❌ Bad
```jsx
<div>
  <Header />
  <Main />
</div>
```

✅ Good
```jsx
<>
  <Header />
  <Main />
</>
```

## 3 - Spread props
Destructure props for more readable and concise components.

❌ Bad
```jsx
function TodoList(props) {
  return (
    <p>{props.item}</p>
  );
}
```

✅ Good
```jsx
function TodoList({item}) {
  return (
    <p>{item}</p>
  );
}
```

## 4 - Setting default props
Define default values directly within props for easy management

❌ Bad
```jsx
function Card({ text, small }) {
  let btnText = text || "Click here";
  let isSmall = small || false;
  ...
}
```

✅ Good
```jsx
function Card({
  text = "Click here",
  small = false,
 }) {
  ...
}
```

## 5 - Simplify String Props
Pass string props without curly braces for cleaner syntax.

❌ Bad
```jsx
<Button text={"Submit"} />
```

✅ Good
```jsx
<Button text="Submit" />
```

## 6 - Move static data out
Keep components efficient by moving static data outside.

❌ Bad
```jsx
function LevelSelectorComponent() {
  const LEVELS = ["Easy", "Medium", "Hard"];

  return (...)
}
```

✅ Good
```jsx
const LEVELS = ["Easy", "Medium", "Hard"];

function LevelSelectorComponent() {
  return (...)
}
```
