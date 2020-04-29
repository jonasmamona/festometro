import React from "react";
import "../../App.css";

export interface ICounterProps {
  countedDays: number;
}

function BeforeStartingDate(props: ICounterProps) {
  return (
    <div>
      <h2 className="before">
        Você chegou cedo demais. Falta(m) <span>{props.countedDays * -1} </span>
        dia(s) para começarmos a contar.
      </h2>
    </div>
  );
}

function CountingHasStarted(props: ICounterProps) {
  return (
    <div>
      <h2>
        Já temos R$ <span>{props.countedDays + 1}</span> por Confradx em jogo.
      </h2>
      <h2>
        Isso dá <span>{props.countedDays + 1 * 16}</span> reais pra gastar em
        algo pior que ajuda comunitária.
      </h2>
    </div>
  );
}

export default function Counter(props: ICounterProps) {
  return (
    <div className="fade-in">
      {props.countedDays < 0 ? (
        <BeforeStartingDate countedDays={props.countedDays} />
      ) : null}{" "}
      {props.countedDays >= 0 ? (
        <CountingHasStarted countedDays={props.countedDays} />
      ) : null}
    </div>
  );
}
