import React from "react";
import Product from "../../interfaces/Product";

export interface IKnapsackProps {
  products: Array<Product>;
}

export default function Knapsack(props: IKnapsackProps) {
  return (
    <div>
      <h1>Com esse dinheiro, dá pra comprar:</h1>
    </div>
  );
}
