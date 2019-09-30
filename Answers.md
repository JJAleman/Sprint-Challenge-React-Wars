# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
React JS is a JavaScript library for building user interfaces.
React makes it painless to create interactive UIs. React allows developers to create large web applications which can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. 

2. What does it mean to think in react?
What React did very well was to bring immutable UIs to the masses - you never "mutate" a UI - you always (re-)render it. Always run the same function that was used for the initial rendering to get the updated interface.

3. Describe state.
The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

4. Describe props.
Props are arguments passed into React components. Props are passed to components via HTML attributes. React Props are like function arguments in JavaScript and attributes in HTML.


5. What are side effects, and how do you sync effects in a React component to state or prop changes?
A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. 
