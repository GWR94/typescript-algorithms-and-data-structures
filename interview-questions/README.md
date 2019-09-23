# Common React Interview Questions

## What is the DOM (Document Object Modal)?

The DOM is a cross-platform and language-independent interface that treats an XML or 
HTML document as a tree structure, where each node is an object representing part of the
document. The DOM represents a document with a logical tree. Each branch of the tree ends
in a node, and each node contains objects. DOM methods allow programmatic access to the
tree, by using a method such as `.innerHTML` to change text values.


<img src="./img/DOM-model.svg" height="400" alt="By Birger Eriksson - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=18034500">

## What is the Virtual DOM (VDOM)?

The Virtual DOM is a concept where a virtual representation of the UI is kept in memory 
so it can be synced with the "real" DOM via a library such as React DOM.

The virtual DOM object has the same properties as the DOM, without the functionality to
physically change what is shown on the screen. The virtual
DOM is essentially a lightweight "read only" copy of the DOM. Manipulating the DOM can be
slow and memory intensive, whereas manipulating the VDOM is much faster because nothing gets
drawn on screen. Once changes are made to VDOM, React DOM will compare the VDOM and DOM to
see if there are any changes. If there are changes to be made, only the changed nodes are 
re-rendered, whilst the other nodes remain unchanged and still rendered. If there are no
differences between the DOM and VDOM, then nothing changes.

The benefits of using the VDOM can be shown if we have a page which renders a list
from an array of 10 items. If we added a new item to the array when manipulating the DOM
we would have to re-render all of 10 items in the array with the final item on top. If we
are using the virtual DOM then it wouldn't have to re-render any of the previous 10 items,
as they are already saved in memory - the only item which is being rendered is the new node
created from adding an item to the list.

## What happens when updating the VDOM?

When you render a JSX element or change the application state changes, every single VDOM object
gets updated. This may seem inefficient, however it is insignificant because the VDOM can update
so quickly.

Once the VDOM has updated, React compares the new VDOM with a snapshot of the VDOM which
was taken right before the update. By comparing these two VDOM's React can compare one
another to find out exactly what elements in the VDOM have changed. This process is called
"diffing".

Once React knows which VDOM elements need to be changed, React then updates those objects -
and only those objects - in the "real" DOM. This step is called reconciliation.

## What is React?

React is an open source front-end JavaScript library used for user interfaces (UI),
specifically for single page applications (SPA's). It is used to create reusable components
for the ease of complex UI design. React is used for handling the view layer for web and mobile
applications.

React allows developers to create large web applications which can change in data, without reloading
the page once. This is a particularly useful as it allows the pages to feel fast and responsive compared
to having to click a link and generate a new page to see the results, as results will happen instantly
with zero load times after the initial assets download. 

## React Features

**JSX**

JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that HTML-like text can co-exist
in React code. The syntax is intended to be used with a preprocessor such as Babel to transform the
HTML-like text into standard JavaScript objects, which the JavaScript engine will the properly parse.

JSX essentially allows you to write concise HTML/XML-like structures (e.g DOM-like tree structures) in
the same file as you write JavaScript code. Babel then transforms these expressions into actual JavaScript
code. In effect, instead of doing it the "old" way - where we put JavaScript into HTML - we can do it the
other way around by putting HTML into JavaScript. JSX is ultimately a shorthand for calling 
`React.createElement()`.

JSX Examples:

```tsx
const app = (
  <div id="jsx"> // <-- JSX Element
    <h1 id="test">I'm a JSX Element</h1>
    <p>I'm also a JSX element</p>
  </div>
)
```

Babel transformation:
```tsx
const app = React.createElement(
  "div",
  { id: "jsx" },
  React.createElement(
    "h1",                // Element Type
    { id: "test" },      // Element properties
    "I'm a JSX Element"  // Values
  ),
  React.createElement(
    "p"
    null,
    "I'm also a JSX Element"
  )
)
```

**Unidirectional Data Flow**
Unidirectional/One-way data flow is not React specific, however it is a concept that is inherited whilst
using React. In general the concept is that data has one, and one only, way to be transferred between
other parts of the applications.

In React this means:
- State is passed to the view and to child components
- Actions are triggered by the view
- Actions can update the state
- The state change is passed to the view and to child components

## What is `React.createClass()`?

`React.createClass` allows you to generate component "classes" in ES5 JavaScript. With ES6 JavaScript,
React allows you to implement component classes that use ES6 JavaScript classes. The end result is still
the same - you have a component class.

ES5:
```tsx
import React, { FC } from "react";

interface AppProps {
  firstName: string;
  lastName: string;
}

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>`Hi ${firstName} ${lastName}`</h1>
      </div>
    );
  }
});
```

ES6:
```tsx
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    )
  }

}
```

## What is ReactDOM and what is the difference between ReactDOM and React?

Prior to v0.14, all of ReactDOM was a part of the React library, but later it was split into two
separate libraries. As the name states, ReactDOM is the glue between React and the DOM. The most common
use for ReactDOM is mounting. Another useful feature of ReactDOM is `ReactDOM.findDOMNode()`, which is
used to gain direct access to a DOM element. For everything else there, there's React. We use React to
define and create our elements, for lifecycle hooks, etc.

## What is the difference between a class component and functional component?

Previously, the only way to have local state on a component would be to use a class component. Functional
components always used to be stateless - hence previously being called stateless functional components,
however since the introduction of React hooks, you can now use state using the `useState()` hook.

Class components were also previously the only way to use lifecycle methods such as `componentDidMount()`
and `componentWillUnmount()` etc. However, once again since React 16.7.0 we can use hooks like `useEffect()`
to mimic class components lifecycle methods.

## How do you set local state in React?

### Class Components

To create local state in class components, you can setup initial state in the constructor of the class, or
on its own:

```tsx
import React, { Component } from "react";

class App extends Component {
  constructor(props) { 
    super(props);

    state = {
      name: "",
    }
  }

  render() {
    return (
      <div>
        <h1>Enter Name:</h1>
        <input onChange={e => this.setState({ name: e.target.value })} value={this.state.name}>
      </div>
    )
  }
}
```
Once the state is initialised in the constructor of the component, it can be changed in by using 
`this.setState({})` method. In the above example you can use the onChange event for an input by
setting `onChange{e => this.setState({ name: e.target.value }) }`. Once the state is changed from
the onChange method, the value is updated and therefore shown in the input field thanks to the
`value={this.state.name} in the input field.

### Functional Components

To create local state in a functional component you need to use a hook to invoke and change state. useState 
is a React 16.7+ hook which is used in functional components to create and change local state. The syntax for
useState is const[`STATE_NAME`, `NAME_OF_FUNCTION_TO_UPDATE_STATE`] = useState(`INITIAL_STATE_VALUE`).
So for the example below, the name of the state is `name`, the name of the function to update the state
is `setName`, and the initial value of the state is `""`. This means that we can call setName in any 
part of the component to update the name state. 

```tsx
import React, { useState } from "react";

const App = (props) => {
  const [name, setName] = useState("");

  return (
    <h1>Enter Name:</h1>
    <input onChange={e => setName(e.target.value)} value={name}>
  )
}
```


## What is the difference between state and props?

The state is a data structure which starts with a default value when a component mounts. It can be
mutated over time, usually as a result of user events. Props (properties) are a a components configuration
and immutable as far as the components receiving them is concerned. They are received from their parent 
component, and cannot be changed from themselves, however are responsible for piecing together and passing
props to it's child components. Props do not have to be data, callback functions can be passed in as props.

You can also set default prop values, incase a prop isn't passed down from the parent components, and
you can set the `propTypes` to set a type of the props.

```tsx
import React from "react";

const Greet = ({ firstName, lastName }) => (
  return (
    <div>
      <p>`Hello ${firstName} ${lastName}. {age ? `You are ${age} years old` : ""}`</p>
    </div>
  )
)

Greet.defaultProps = {
  firstName: "Unknown",
  lastName: "User"
  age: null
}

Greet.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number
}
```

Props and state do similar things, but are used in different ways. The majority of the components will
probably be stateless, however props are more often used to pass the data between components. State is
used for mutable data, or data that will change. Props are immutable and thus cannot be changed.

## What are controlled components?

When using basic HTML, controlled elements are different types of form elements which contain their own
personal state based on inputting values. Examples of controlled elements are `<input>`, `<textarea>`
and `<select>`. When a user submits the data on the form, the values from the controlled elements are
sent along with the form.

In React, things work a bit differently. The component containing the form will keep track of all of the
inputs state and will re-render the component each time a controlled component is changed, usually by an
`onChange` function is fired. A form element which is controlled in this way is called a controlled
component.

With a controlled component, every state mutation is set by one `onChange` or similar callback function,
so it makes it straightforward to modify or validate user input.

```tsx
import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" onChange={e => setEmail(e.target.value)}>
        <input type="password" onChange={e => setPassword(e.target.value)}>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
```

## What is a higher-order component (HOC)?

A higher-order component is an advanced technique in React for reusing component logic. HOC's are not
officially a part of the React API, they are a pattern that emerge from React's composition nature.

A HOC is essentially a function that takes a component, and returns a new component.

```tsx
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

Whereas a component transforms props into UI, a HOC transforms a components into another
components. An example of a HOC is redux's `connect()`, which connects the component to
the redux store. Beyond sharing utility libraries and simple composition, HOC's are the
best way to share behavior between components.

## What is React Context?

React context is a way to avoid passing props through to multiple children components,
and instead create one "global" state that can be used be all connected components.

## What does "use strict" do, and what are some of the key benefits to using it?

Including "use strict" at the beginning of your JavaScript source file enables strict mode. Strict mode
enforces stricter parsing, and error handling of JavaScript code. Using strict mode is considering
good practice and offers many benefits, such as:

### Converting mistakes into errors

Strict mode changes previously accepted mistakes into errors. JavaScript was designed to be a language
that is easier for novices, which would sometimes lead to errors not being shown. This can be a problem
because the errors may not be a problem at the first time of writing the code, but when it's changed
further down the line it can become an issue which is even harder to debug. With strict mode enabled,
these silent errors are shown so they can be handled immediately.

### Prevents accidental global variables

Strict mode makes it impossible to accidentally create global variables. In normal JavaScript mistyping
a variable in an assignment creates a new property on the global object, and will continue to "work",
although this can again lead to errors down the line. With strict mode enabled the mistyped variable
will throw a reference error.

```typescript
"use strict"
// assuming a global variable called typed exists;
misTyped = 10; // throws a reference error, due to the variable name being misspelled.
```

### Disallows rewriting non-writable variables

Strict mode makes assignment which would otherwise silently fail to throw an error.
For example, NaN (Not a number) is a non-writable global variable. In normal code
(without strict mode) assigning a variable to NaN does nothing, however in strict mode
it throws an exception. 

```typescript
'use strict';

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // throws a TypeError
```

### Simplifies `eval()` and `arguments`

In "normal" code `eval("var x;")` introduces variable `x` into the surrounding scope
or global scope. This means that, in general, in a function containing a call to 
`eval()`, every name not referring to an argument or local variable must be mapped to
a particular definition at runtime (because that `eval` might have introduced a new
variable that would hide the outer variable). In strict mode `eval` creates variables
only for the code being evaluated, so `eval` can't affect whether a name refers to an
outer variable or some local variable.

## What is event delegation and how is it useful?

Event delegation is a technique of delegating events to a single common ancestor. Due to
event bubbling, events "bubble up" the DOM tree by executing any handlers progressively
on each ancestor up the root that may be listening to it.

DOM events provide useful information about the element that initiated the event (via
`Event.target`). This allows the parent element to handle the behavior as if it was
listening to the event, rather than all children of the parent, or the parent itself.

For example, if there was x number of tiles in a form, we could define one function 
which handles all of the , and use `Event.target` to determine which tiles has
been clicked, and execute the function based on the the result of this.

```typescript
let selectedTd;

table.onclick = function(event) {
  let td = event.target.closest('td'); // Find the closest ancestor that matches selector
  /**
   *  If event.target is not inside any <td>, there nothing to highlight, so return.
   */
  if (!td) {
     return; 
  }
  /**
   * in case of nested tables, e.target may be a <td> lying outside of the current table,
   * so check if it's actually the current table's <td>.
   */
  if (!table.contains(td)) {
    return
  }
  /**
   * If it's the right table, highlight it.
   */
  highlight(td); // (4)
};

function highlight(td) {
  if (selectedTd) { // remove the existing highlight if any
    selectedTd.classList.remove('highlight');
  }
  selectedTd = td;
  selectedTd.classList.add('highlight'); // highlight the new td
}
```

## How do you write comments in JSX?
Comments must be wrapped inside curly braces and use the /* */ syntax.
```tsx
const App = () => (
  <div>
    <h1>Test<h2>
    <p>Test test test</p>
    {/* I'm a comment in JSX */}
  </div>
)
```

## What are the different phases of the component lifecycle in React?

**Initialisation** - In this phase, the component prepares setting up the initial state
and default props.

**Mounting** - The react component is ready to mount to the DOM. This phase covers
`getDerivedStateFromProps()` and `componentDidMount()` lifecycle methods.

**Updating** - In this phase, the component gets updated in two ways - sending the new props,
and updating the state. This phase covers the `getDerivedStateFromProps()`, `shouldComponentUpdate()`,
`getSnapshotBeforeUpdate()` and `componentDidUpdate()` lifecycle methods.

**Unmounting** - In this final phase, the component is not needed and gets unmounted from the
DOM. This phase includes the `componetWillUnmount()` lifecycle method.

**Error Handling** - In this phase, the component is called whenever there is an error during
rendering, a lifecycle method, or in the constructor for any child component. This phase includes
the `componentDidCatch()` lifecycle method.

## How do you ensure methods have the correct `this` context in React classes?

In JavaScript classes, the methods are not bound by default. This means that their `this` context
can be changed (in the case of an event handler, to the element that is listening to the event)
and will not refer to the component instance. To solve this, you can bind it to the 
current component class by running `Function.prototype.bind()` on it:

```tsx
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  // do something
}

render() {
  return (
    <div>
      <button onClick={this.handleClick} />
    </div>
  )
}
```

Another way to ensure that methods have the correct `this` context is to use "arrow" functions, which
create a public class field for the method to be invoked.
The reason that these can be preferred is because you don't have to manually bind arrow functions
to the class. When using this method there is no reason to create a constructor (if the only 
reason the constructor would have been created is to bind the methods to the class).

```tsx
handleClick = () => {
  // do something
}

render() {
  return (
    <div>
      <button onClick={this.handleClick} />
    </div>
  )
}
```

Alternatively, you can also use an inline arrow function - because lexical 
`this` for inline arrow functions is preserved:

```tsx
<button onClick={e => this.handleClick(e)}>Click Me</button>
```

When using inline arrow functions extra re-renders can occur because a new function
reference is created on `render()` which gets passed down to child components and
break `shouldComponentUpdate()`/`PureComponent` shallow equality checks to prevent
unnecessary re-renders. In cases where performance is important, it is better to
bind in the constructor, or use public class fields syntax, because the function is
always constant.

## What is the `children` prop?
The `children` is part of the props object passed to the components that allows components
to be passed as data to other components.

## What is the difference between lexical scope and dynamic scope?

**Lexical/Static Scope** - 