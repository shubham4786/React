import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = <h1>Hello World Using JSX</h1>;

const Title = () => <h1>Hello React Title</h1>;

const HeadingComponent = () => (
  <>
    {heading}
    <Title />
    <h1>Hello World Using React Functional Component</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);
