const domRoot = document.getElementById("root");
const heading = React.createElement("h1", {}, "Hello World");
const reactRoot = ReactDOM.createRoot(domRoot);

reactRoot.render(heading);
