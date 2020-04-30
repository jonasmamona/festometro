import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "../src/components/counter/counter";
import Confetti from "./components/confetti/confetti";
import Knapsack from "./components/knapsack/knapsack";
import { datediff } from "./helpers";
import axios from "axios";
import { products } from "./data/products";

const startingDate: Date = new Date("2020-05-01T00:00:01.000000-03:00");

function App() {
  const [countedDays, setCountedDays] = useState<number | null>(null);
  useEffect(() => {
    const getBahiaDateTime = () => {
      axios(
        "https://worldtimeapi.org/api/timezone/America/Bahia/"
      ).then((result) =>
        setCountedDays(datediff(startingDate, new Date(result?.data?.datetime)))
      );
    };
    getBahiaDateTime();
  }, []);

  return (
    <div>
      <h1>FESTÔMETRO</h1>
      <Confetti />
      {countedDays && <Counter countedDays={countedDays} />}
      {countedDays && (
        <Knapsack products={products} totalMoney={(countedDays + 1) * 16} />
      )}
    </div>
  );
}

export default App;
