import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const lakeList = [
  { id: "1", name: "Echo Lake", trailhead: "Echo" },
  { id: "2", name: "Lake George", trailhead: "George" },
  { id: "3", name: "Lake Tahoe", trailhead: "Tahoe" },
  { id: "4", name: "Crater Lake", trailhead: "Crater" },
  { id: "5", name: "Lake Placid", trailhead: "Placid" },
];

function App({ lakes }) {
  return (
    <div>
      {lakes.map((lake) => (
        <div key={lake.id}>
          <h2>lake.name</h2>
          <p>Accessed by: {lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App lakes={lakeList} />, document.getElementById("root"));
