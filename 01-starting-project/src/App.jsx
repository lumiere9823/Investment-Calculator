import React from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    durationReturn: 10,
  });

  const isInvalid = userInput.durationReturn >= 1;

  function handleChange(inputIdentifier, value) {
    setUserInput({
      ...userInput,
      [inputIdentifier]: +value,
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} UserInput={userInput} />
      {isInvalid && <Results UserInput={userInput} />}
    </>
  );
}

export default App;
