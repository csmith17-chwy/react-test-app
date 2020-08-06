import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake({ name }) {
  return <h1>{name}</h1>;
}

function App() {
  return (
    <div>
      <Lake name="Lake Tahoe" />
      <Lake name="Lake George" />
      <Lake name="Lake Placid" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
