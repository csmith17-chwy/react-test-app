import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake() {
  return <h1>Lake</h1>;
}

function SkiResort() {
  return <h1>Mountain</h1>;
}

function App() {
  return (
    <React.Fragment>
      <Lake />
      <SkiResort />
    </React.Fragment>
  );
}

ReactDOM.render(<App season="winter" />, document.getElementById("root"));
