import React from "react";
import { datediff } from "../../helpers";
import "../../App.css";

const startingDate: Date = new Date("2020-05-01");
const countedDays = datediff(startingDate, new Date());

function BeforeStartingDate() {
  return (
    <div>
      <h2 className="before">
        Você chegou cedo demais. Faltam <span>{countedDays * -1} </span>dias
        para começarmos a contar.
      </h2>
    </div>
  );
}

function CountingHasStarted() {
  return (
    <div>
      <h2>
        Já temos R$ <span>{countedDays + 1}</span> por Confradx em jogo.
      </h2>
      <h2>
        Isso dá <span>{countedDays + 1 * 16}</span> reais pra gastar em algo
        pior que ajuda comunitária.
      </h2>
    </div>
  );
}

export default function Counter() {
  return (
    <div>
      <h1>FESTÔMETRO</h1>
      {countedDays < 0 ? <BeforeStartingDate /> : null}{" "}
      {countedDays >= 0 ? <CountingHasStarted /> : null}
    </div>
  );
}
