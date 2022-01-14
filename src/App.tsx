import "./App.css";
import Header from "./Header";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState<number | string>(5);

  const [people, setPeople] = useState([
    {
      name: "Sean Mendez",
      url: "",
      age: 35,
      note: "",
    },
    {
      name: "Mike Jacobs",
      url: "",
      age: 30,
    },
  ]);

  const changeNumber = () => {
    setNumber(10);
  };

  const changeNumberToString = () => {
    setNumber("9");
  };

  //TypeScript Complains
  // const changeNumberToBoolean = () => {
  //   setNumber(true);
  // }

  return (
    <div className="App">
      <Header title="Hello World" color="red" />
      <h1>TypeScript Practice!!!!!!</h1>
    </div>
  );
}

export default App;
