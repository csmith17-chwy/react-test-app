import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App({ name }) {
  const [year, setYear] = useState("2013");
  const [manager, setManager] = useState("Colin");
  const [status, setStatus] = useState("Open");
  return (
    <>
      <div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year + 1)}>Next Year</button>
      </div>
      <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Chris")}>New Manager</button>
      </div>
      <div>
        <h1>Status: {status}</h1>
        <button onClick={() => setStatus("Back in 5")}>Break</button>
        <button onClick={() => setStatus("Closed")}>Closed</button>
        <button onClick={() => setStatus("Open")}>Open</button>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
