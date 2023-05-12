import React from "react";
import "./App.css";
import { useCalculator } from "./hooks/useCalculator";
import { KeyPad } from "./buttons/KeyPad";
function App() {
  const { sequence, control } = useCalculator();
  return (
    <div>
      <KeyPad {...sequence} control={control}></KeyPad>
      <p>{sequence}</p>
    </div>
  );
}

export default App;
