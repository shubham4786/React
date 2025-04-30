import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "h1",
//   { className: "heading", xyz: "abc" },
//   "Hello World from React"
// );

const parent = React.createElement("div", { id: "psrent", key: "1" }, [
  React.createElement("div", { id: "child1", key: "2" }, [
    React.createElement("h1", { key: "3" }, "h1 Heading of First Child"),
    React.createElement("h2", { key: "4" }, "h2 Heading of First child"),
  ]),
  React.createElement("div", { id: "child2", key: "5" }, [
    React.createElement("h1", { key: "6" }, "h1 Heading of Second Child"),
    React.createElement("h2", { key: "7" }, "h2 Heading of Second child"),
  ]),
]);

// console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
