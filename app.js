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
        [ React.createElement("h1",{}, "this is an h1 tag"),
           React.createElement("h2",{}, "this is a h2 tag")]
    ), 
    React.createElement("div", {id:"child1"},
        [ React.createElement("h1",{}, "this is an h1 tag"),
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