import React from "react";
import ReactDOM from "react-dom";

import Note from "./components/Note";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Note />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
