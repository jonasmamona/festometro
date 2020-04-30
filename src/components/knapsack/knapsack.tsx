import React from "react";
import Product from "../../interfaces/Product";

export interface IKnapsackProps {
  products: Array<Product>;
  totalMoney: number;
}

const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "lightgreen",
  "pink",
  "purple",
  "salmon",
  "darkslateblue",
  "mediumvioletred",
  "lightslategray",
  "brown",
];

export default function Knapsack(props: IKnapsackProps) {
  return (
    <div>
      <h2>Com esse dinheiro, dá pra comprar:</h2>
      <ul>
        {props.products?.map((element, index) => {
          let colorResult = colors[Math.floor(Math.random() * colors.length)];

          return (
            <li key={index}>
              <h3 style={{ color: colorResult }}>
                {Math.round(props.totalMoney / element.price) *
                  element.multiplier}
                {element.suffix}
                {element.name}
                {props.products.indexOf(element) === props.products.length - 1
                  ? null
                  : " ou"}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
