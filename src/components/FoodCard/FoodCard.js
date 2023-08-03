import React from "react";
import "./FoodCard.css";

export default function FoodCard({ food }) {
  const { id, name, price, image, toppings, shortDescription } = food;
  return (
    <div className="FoodCard" key={id}>
      <h1>{name}</h1>
      <br />
      <span>{shortDescription}</span>
      <br />
      <br />
      <img src={image} alt={name} />
      <br />
      Price: ${price.toFixed(2)}
      <br />
      Toppings:{" "}
      {toppings.length !== 0 ? toppings.map((topping, index) => (
        <span key={index}>
          {/* adds comma before the toppings if its NOT zero */}
          {`${(index ? ", " : "") + topping}`}
        </span>
      )) : <span>No toppings</span>}
    </div>
  );
}
