// const heading = React.createElement(
//   "h1",
//   { className: "heading", xyz: "abc" },
//   "Hello World from React"
// );

const parent = React.createElement("div", { id: "psrent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1 Heading of First Child"),
    React.createElement("h2", {}, "h2 Heading of First child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 Heading of Second Child"),
    React.createElement("h2", {}, "h2 Heading of Second child"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
