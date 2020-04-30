import React, { useState, useEffect } from "react";
import "./App.css";
import Counter from "../src/components/counter/counter";
import Confetti from "./components/confetti/confetti";
import Knapsack from "./components/knapsack/knapsack";
import { datediff } from "./helpers";
import { make as Richard } from "./reason/page/Richard/Richard.bs";
import useSound from "use-sound";
//@ts-ignore
import visimta from "./audio/visimta.mp3";
//@ts-ignore
import IconBulb from "@bit/riffle-labs.zero.icon-bulb";
import axios from "axios";
import { products } from "./data/products";

const startingDate: Date = new Date("2020-05-01T00:00:01.000000-03:00");

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
      <h1>FESTÔMETRO</h1>
      <Confetti />
      {countedDays !== null ? <Counter countedDays={countedDays} /> : null}
      {countedDays !== null && countedDays >= 0 ? (
        <Knapsack
          products={products.filter((element) => {
            return element.price <= (countedDays + 1) * 16;
          })}
          totalMoney={(countedDays + 1) * 16}
        />
      ) : null}
      <IconBulb
        size={40}
        onClick={toggleLights}
        className={`bulb${lightsOff ? " bulb-light" : ""}`}
      />
      {lightsOff && <Richard />}
    </div>
  );
}

export default App;
