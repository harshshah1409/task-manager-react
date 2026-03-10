import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        style={{ padding: "10px", width: "250px" }}
      />

      <button style={{ marginLeft: "10px", padding: "10px" }}>Add Task</button>

      <ul style={{ marginTop: "30px" }}>
        <li>Learn React</li>
        <li>Practice Git</li>
      </ul>
    </div>
  );
}

export default App;
