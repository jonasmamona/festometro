import React from "react";
import "./App.css";
import Counter from "../src/components/counter/counter";
import Confetti from "./components/confetti/confetti";

function App() {
  return (
    <div>
      <Confetti />
      <Counter />
    </div>
  );
}

export default App;
