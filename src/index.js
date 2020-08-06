import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const lakeList = [
  "Echo Lake",
  "Lake George",
  "Lake Tahoe",
  "Crater Lake",
  "Lake Placid",
];

function App({ lakes }) {
  return (
    <ul>
      {lakes.map((lake) => (
        <li>{lake}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<App lakes={lakeList} />, document.getElementById("root"));
