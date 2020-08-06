import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake({ name }) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function SkiResort({ name }) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function App(props) {
  return (
    <div>
      {props.season === "summer" ? (
        <Lake name="Smith Lake" />
      ) : props.season === "winter" ? (
        <SkiResort name="Forge Mountain" />
      ) : (
        <h1>Come back in the winter or summer!</h1>
      )}
    </div>
  );
}

ReactDOM.render(<App season="winter" />, document.getElementById("root"));
