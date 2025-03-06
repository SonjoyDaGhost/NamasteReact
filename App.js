const heading = React.createElement("h1", {id:"heading"}, "This is heading");
const child = React.createElement("div", {class: "child"}, heading);
const parent = React.createElement("div",{class: "parent"}, child);
const dom = ReactDOM.createRoot(document.getElementById("root"));
dom.render(parent)