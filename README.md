Namaste React 
Learning react

#### commands to run project
npm run build 
 - parcel build index.html

npm start
 - parcel index.html



dist is the production ready js file
parcel is compress everything 
dist and cache can be re-generated


## mehod 1 to inject react into our project
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- React should be define before adding js file -->
    <!-- Order of files matter a lot -->

## app.js Method Cross-Origin to inject react
{
    // import React from "react";
    // import ReactDOM from "react-dom";

    const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "text for h1 tag");
    // parameters are 1. html tag 2. {} object write anything go as attribute for that tag 3. text for that tag

    // props: 2. attributes 3. chidlren
    // console.log(heading);
    // heading is a react element, javascript object of h1 type 

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);
            

    /* <div id="parent">
        <div id="child">
            <h1>this is an h1 tag</h1>
        </div>
    </div> */

    const parent = React.createElement("div", {id: "parent"}, 
        React.createElement("div", {id:"child"},
            [ React.createElement("h1",{}, "this is an h1 tag"),
            React.createElement("h2",{}, "this is a h2 tag")]
        )
    );
    // To pass multiple children or say siblings we pass them in array

    // const root2 = ReactDOM.createRoot(document.getElementById("root"));
    // root2.render(parent);

    root.render(parent);


    /* <div id="parent">
        <div id="child1">
            <h1>this is an h1 tag</h1>
            <h2>this is an h2 tag</h2>
        </div>
            <div id="child2">
            <h1>this is an h1 tag</h1>
            <h2>this is an h2 tag</h2>
        </div>
    </div> */


    const parent1 = React.createElement("div", {id: "parent"}, 
        [ React.createElement("div", {id:"child1"},
            [ React.createElement("h1",{}, "Namaste React"),
            React.createElement("h2",{}, "by Akshay Saini")]
        ), 
        React.createElement("div", {id:"child1"},
            [ React.createElement("h1",{}, "I am a web developer"),
            React.createElement("h2",{}, "this is a h2 tag")]
        )]
    );

    root.render(parent1);

    // React does not append new content—it replaces the old content with the latest render.
    // React is smart enough to only update the parts of the DOM that need updating.
    // rest of the code remain same
    // For creating this html structure this is complex in core react so we use JSX
    // JSX is a syntactic sugar for React.createElement

    // If root contains any tag already it will replaced by parent1 element after render method is called

    // below and after root div html structure works same as written in index.html file
}

# Ep - 4
...

# Ep - 5

## named export/import
    export const var-name = ...;
    import {var-name} from file/path...;

## default export/import
    var-name = () => {...};

    export default var-name;
    import var-name from file/path;

## Yes can be both export/import together

    export const var-name1 = ...;
    const var-name2 = ...;
    export default var-name2;

    import var-name1, {var-name2, var-name3} from file/path;

## re-export
    - this is correct..
    export const var-name1 = ...; 
    export default var-name1;

    - But this is wrong.
    const var-name1 = ...;
    export var-name1;
    export default var-name1;

# React Hooks

    (Normal JS utility functions)
    - useState()
    - useEffect()

## Why react is Fast ?
bcz it has Reconciliation, React Fiber, Diff algorithm, Virtual DOM.

read all of them 
https://github.com/acdlite/react-fiber-architecture
https://youtu.be/MPCVGFvgVEQ?si=wSNGTcDw2Nqemsk_


# Ep - 6

## Why state variables while having normal JS varibales ?

when we need to change variable values dynamically or via some inputs by user 
normal JS variables do update their value but the component do not re-render to change UI.

So dynamically changes in UI not possible with nortmal JS variables.

but with useState() component re-render the changes whenever react found any change in state. 

In React, regular JavaScript variables are not tracked for changes. So, if you update a normal variable, React has no way of knowing that it changed, and the UI won’t automatically re-render.

However, when you use state variables (via useState), React keeps track of changes. Whenever a state variable is updated, React triggers a re-render, compares the updated virtual DOM with the previous one (this is called Reconciliation), and then updates only the parts of the actual DOM that have changed.

every time or (on every click) when state is changing reconciliation process is triggered and react re-render the whole component.

### React knows what to change.

## How const state variable is changing its value ?

first react changes the vslue refrencely oron its addresss.
and when it re-render the components the const variables it takes as new const variable.

## input box is read only untill 
    You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.


# Ep - 7

### Routing without children routes


const AppLayout = () => {
    return(
        <div className= "app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    },
])

### Routing with Children Routes

using Outlet component

Outlet component replace with children component according to matching routes

## Two types of Routing
- server side routing
- client side routing


## LInk tag vs < a > tag

< a > tag reload the entire page
while <Link> tag only renderes the required component

### < Link > tag (from react-router-dom)
Does not reload the entire page
Uses client-side routing
Only updates the part of the UI (component) that needs to change
Keeps the app fast and SPA-like (Single Page Application)
Looks like a normal anchor tag, but behaves smarter

###  < a > tag (HTML anchor tag)
Causes a full page reload
Sends a new HTTP request to the server
Loses React state and context
Breaks the SPA behavior

## GraphQL

https://youtu.be/WtkKwO1viI8?si=oD5Vo1KnuNvkR0Nw

# Ep - 8

## Class base Components vs Functional Components


In class base components 

- Never Directly Update your state variables 
- this.state.count = this.state.count + 1; // Wrong / Inconsistent

- just same as we never update count = something directly in Functional Component 
- We use setCount() 
- Similarly In Class based Components 
- we use 
setState({
    count: this.state.count +1;
});


## useEffect()

During this render/execution of component:

useState() returns the state and setter.
useEffect() does not run the effect function — instead, it registers it.
The component returns JSX and the UI is painted.
After the component is mounted (i.e., UI is painted):
React now executes the registered useEffect() function after render is complete.

### why we make API call inside useEffect() in functional component ?

Because useEffect() runs after the initial render, and this is the best time to:

Fetch data from an API
Set up things that should not block the initial render

### if make API call inside Component ?

Multiple unnecessary API calls on every render.
Performance issues and possible API abuse.


### why we make API calls inside componentDidMount() in class based components ?

✅ componentDidMount() is perfect for side effects
It runs after the initial render, so:
The DOM is ready
The component has been added to the UI
We can safely fetch data and then use setState() to update the UI

If you call APIs in render(), they'll fire every time the component re-renders, leading to:
Multiple unnecessary network requests
Infinite loops if setState() is triggered inside the response
Poor performance

componentDidMount() is called only once, after the first render, when the component is mounted (inserted into the DOM).
#### 🧠 Why?
React class components go through these lifecycle stages:

Mounting → When the component is first added to the DOM
constructor()
render()
componentDidMount() ✅ runs once here
Updating → When props or state changes cause re-render
render()
componentDidUpdate() ✅ (not componentDidMount)
Unmounting
componentWillUnmount()
So, even if the component re-renders many times, componentDidMount() will not run again — it only runs once, after the initial mount.

### React LifeCycle Methods

./Assets/image.jpg

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### There is only one useEffect() with no dependency array 
### where can I make API calls in that component ?

Approach	                        Will it persist across renders?	     Suitable for flag?
let hasFetched = false;	            ❌ No – resets every render	        ❌ Not suitable
const hasFetched = useRef(false);	✅ Yes – persists	                ✅ Ideal


# Ep - 12 

### Install redux

- npm i @reduxjs/toolkit react-redux

### RTK

#### learn redux
- https://youtu.be/1i04-A7kfFI?si=JDsKJPMxK59R7qJC

 