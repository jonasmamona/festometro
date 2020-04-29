import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "../src/components/counter/counter";
import Confetti from "./components/confetti/confetti";
// import Knapsack from "./components/knapsack/knapsack";
import { datediff } from "./helpers";
import axios from "axios";

const startingDate: Date = new Date("2020-05-01T00:00:01.000000-03:00");

// const prices = {
//   choppPrice: 483.0,
//   picanhaPrice: 51.98,
//   porquinhaPrice: 36.9,
// };

// const products = [
//   {
//     name: "Chopp",
//     price: prices.choppPrice,
//   },
//   {
//     name: "Picanha",
//     price: prices.picanhaPrice,
//   },
//   {
//     name: "Porquinha",
//     price: prices.porquinhaPrice,
//   },
// ];

function App() {
  const [countedDays, setCountedDays] = useState<number | null>(null);
  useEffect(() => {
    const getBahiaDateTime = () => {
      axios(
        "http://worldtimeapi.org/api/timezone/America/Bahia/"
      ).then((result) =>
        setCountedDays(datediff(startingDate, new Date(result?.data?.datetime)))
      );
    };
    getBahiaDateTime();
  }, []);

  return (
    <div>
      <Confetti />
      {countedDays && <Counter countedDays={countedDays} />}
      {/* <Knapsack products={products} /> */}
    </div>
  );
}

export default App;
