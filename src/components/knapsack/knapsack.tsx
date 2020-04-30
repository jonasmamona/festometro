import React from "react";
import Product from "../../interfaces/Product";

export interface IKnapsackProps {
  products: Array<Product>;
  totalMoney: number;
}

export default function Knapsack(props: IKnapsackProps) {
  return (
    <div>
      <h2>Com esse dinheiro, dá pra comprar:</h2>
      <ul>
        {props.products?.map((element, index) => {
          return (
            <li key={index}>
              <h3>
                {Math.round(
                  (props.totalMoney / element.price) * element.multiplier
                )}
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
