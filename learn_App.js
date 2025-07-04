import React from "react";
import ReactDOM from "react-dom/client";



// React Element

const heading = React.createElement("h1", {id: "heading"}, "Namaste Rreact!");

// const jsxHeading = <h2 className="heading">Namaste Rreact!</h2>
const jsxHeading = (<h2 className="heading">
    Namaste Rreact!
    </h2>
    );
    // mendatory to use parantheses if creating element in multiple lines


// React Component
// Class base Component - OLD
// Functional Component - NEW normal js function which return some jsx

const Title = () => <h1>Namaste React Title</h1>
const title = (
    <h1>React title element</h1>
)
// simple js code
const number = 6000;

// Component Composition
// render one component inside another component
const HeadingComponent = () => (

    <div id="container">
        {/* injecting JS into JSX  */}
        {/* any peice of JS code you can write into curly braces
        React sanitizes all the data passed in {data} */}
        {title}
        {number}
        {400 + 200}
        
        <Title/>
        
        {/* other ways to render components */}
        {/*         
            <Title></Title>
            <Title/>
            {Title()} 
        */}

        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
root.render(jsxHeading);
root.render(<HeadingComponent/>)
// root.render(<Title></Title>)