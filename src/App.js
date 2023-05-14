import React from "react";
import "./components/progress/ProgressBar.css";
import ProgressBar from "./components/progress/ProgressBar";

function App() {
  return (
    <div>
      <ProgressBar progress={50} />
    </div>
  );
}

export default App;
