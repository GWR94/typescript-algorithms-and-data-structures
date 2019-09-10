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

```
const app = (
  <div id="jsx"> // <-- JSX Element
    <h1 id="test">I'm a JSX Element</h1>
    <p>I'm also a JSX element</p>
  </div>
)
```

Babel transformation:
```
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
```
import React from "react";

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
});
```

ES6:
```
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

```
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

```
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

```
import React from "react";

const Greet = ({ firstName, lastName }) => (
  return (
    <div>
      <p>`Hello ${firstName} ${lastName}. {age ? `You are ${age} years old` : null}</p>
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

```
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

```
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

Whereas a component transforms props into UI, a HOC transforms a components into another
components. An example of a HOC is redux's `connect()`, which connects the component to
the redux store. Beyond sharing utility libraries and simple composition, HOC's are the
best way to share behavior between components.

## What is React Context?

React context is a way to avoid passing props through to multiple children components,
and instead create one "global" state that can be used be all connected components.

