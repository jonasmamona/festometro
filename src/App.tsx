import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "../src/components/counter/counter";
import Confetti from "./components/confetti/confetti";
// import Knapsack from "./components/knapsack/knapsack";
import { datediff } from "./helpers";
import { make as Richard } from "./reason/page/Richard/Richard.bs";
import useSound from "use-sound";
//@ts-ignore
import visimta from "./audio/visimta.mp3";
//@ts-ignore
import IconBulb from "@bit/riffle-labs.zero.icon-bulb";
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
  let [lightsOff, setLights] = useState<null | boolean>(false);
  let [play, { stop }] = useSound(visimta);

  let toggleLights = () => {
    if (lightsOff) {
      stop();
      setLights((_) => false);
    } else {
      play();
      setLights((_) => true);
    }
  };

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
      <IconBulb
        size={40}
        onClick={toggleLights}
        className={`bulb${lightsOff ? " bulb-light" : ""}`}
      />
      <div>
        <h1>FESTÔMETRO</h1>
        <Confetti />
        {countedDays && <Counter countedDays={countedDays} />}
        {/* <Knapsack products={products} /> */}
      </div>
      {lightsOff && <Richard />}
    </div>
  );
}

export default App;
